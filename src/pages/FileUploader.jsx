import React, { useState } from 'react';
import { ethers } from "ethers";
import Sidebar from '../components/sidebar';

const FileUploader = () => {
    const [files, setFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const [totalFiles, setTotalFiles] = useState(0);
    const [fileChosen, setFileChosen] = useState(false);
    const [chosenFileName, setChosenFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null); // Store selected file

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setFileChosen(true);
            setChosenFileName(file.name);
        } else {
            setFileChosen(false);
            setChosenFileName('');
            setSelectedFile(null);
        }
    };

    const handleUploadClick = async () => {
        if (selectedFile) {
            await handleFileUpload(selectedFile);
            setSelectedFile(null); // Reset selected file after upload
            setFileChosen(false);
            setChosenFileName('');
            setTotalFiles(prev => prev + 1); // Increment total files
        }
    };

    const handleFileUpload = async (file) => {
        setIsUploading(true);
        setUploadProgress(0);

        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    setUploadProgress(0);
                    return 100;
                }
                return prev + 5;
            });
        }, 200);

        try {
            const ipfsHash = await uploadToIPFS(file);
            await storeFiles(userEmail, ipfsHash);

            const newFile = {
                id: `${Date.now()}`,
                name: file.name,
                type: file.type || 'application/octet-stream',
                size: formatFileSize(file.size),
                dateUploaded: new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })
            };
            setFiles(prev => [newFile, ...prev]);
        } catch (error) {
            console.error("File upload error:", error);
            setIsUploading(false);
            setUploadProgress(0);
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    const uploadToIPFS = async (file) => {
        try {
            return "QmSomeIPFSHash";
        } catch (error) {
            console.error("Error uploading to IPFS:", error);
            throw error;
        }
    };

    const storeFiles = async (email, ipfsHash) => {
        try {
            // const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
            // const signer = provider.getSigner();
            // const contract = new ethers.Contract(CONTRACT_ADDRESS, FileStorage.abi, signer);
            const tx = await contract.storeFile(email, ipfsHash);
            await tx.wait();
            console.log("File stored");
        } catch (error) {
            console.error("Error storing file:", error);
        }
    };

    return (
        <>
            <div className='flex gap-8'>
                <Sidebar />
                <div className='flex flex-col items-center justify-center text-[#b5b25c]'>
                    <div className='flex flex-col justify-between items-start mt-[10vh]'>
                        <div className="flex justify-evenly mb-4 w-[60vw]">
                            <div className='flex flex-col w-[70vw]'>
                                <h1 className="text-3xl font-bold">My Files</h1>
                                <p className="text-muted-foreground mt-1">
                                    Securely stored on IPFS and verified with your DID
                                </p>
                            </div>
                            <div>
                                <button
                                    className={`bg-[#F66435] p-2 px-4 rounded-lg text-white ${!selectedFile ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={handleUploadClick}
                                    disabled={!selectedFile}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                        <div className='ml-1 mb-4'>
                            <p className='mb-2'>Total Files: {totalFiles}</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[70vw] h-[300px] mt-6'>
                        <div className="p-8 rounded-lg text-center border border-gray-200 shadow-xl w-[70vw] h-[300px] flex flex-col items-center justify-center bg-white">
                            <div className="text-5xl mb-4">📁</div>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                            {fileChosen && <p>File chosen: {chosenFileName}</p>}
                        </div>
                    </div>
                    {totalFiles < 1 ? (
                        <>
                            <h3 className="text-xl font-medium mt-[30px]">No Files yet</h3>
                            <p className="text-muted-foreground">Upload your first file to get started</p>
                        </>
                    ) : (
                        <div className='grid grid-cols-3 gap-20 mt-[80px]'>
                            {files.map((file) =>
                                <div key={file.id} className='bg-[#f3f4f6] p-4 border-0 rounded-xl w-[300px] h-[90px] flex flex-col justify-evenly'>
                                    {file.name}
                                    <div className='text-sm'>
                                        size: {file.size}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FileUploader;
