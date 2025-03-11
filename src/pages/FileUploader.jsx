// import React, { useState } from 'react';
// import Header from '../components/header';
// import Sidebar from '../components/sidebar';

// const FileUploader = () => {
//     const [files, setFiles] = useState([]);
//     const [isUploading, setIsUploading] = useState(false);
//     const [uploadProgress, setUploadProgress] = useState(0);
//     const [userEmail, setUserEmail] = useState('');
//     const [totalFiles, setTotalFiles] = useState(0);
//     const [fileChosen, setFileChosen] = useState(false);
//     const [chosenFileName, setChosenFileName] = useState('');

//     const handleFileChange = async (e) => {
//         if (e.target.files && e.target.files.length > 0) {
//             const file = e.target.files[0];
//             setFileChosen(true);
//             setChosenFileName(file.name);
//             await handleFileUpload(file);
//         } else {
//             setFileChosen(false);
//             setChosenFileName('');
//         }
//     };

//     const handleFileUpload = async (file) => {
//         setIsUploading(true);
//         setUploadProgress(0);

//         const interval = setInterval(() => {
//             setUploadProgress(prev => {
//                 if (prev >= 100) {
//                     clearInterval(interval);
//                     setIsUploading(false);
//                     setUploadProgress(0);
//                     return 100;
//                 }
//                 return prev + 5;
//             });
//         }, 200);

//         try {
//             const ipfsHash = await uploadToIPFS(file);
//             await storeFiles(userEmail, ipfsHash);

//             const newFile = {
//                 id: `${Date.now()}`,
//                 name: file.name,
//                 type: file.type || 'application/octet-stream',
//                 size: formatFileSize(file.size),
//                 dateUploaded: new Date().toLocaleDateString('en-US', {
//                     month: 'short',
//                     day: 'numeric',
//                     year: 'numeric'
//                 })
//             };
//             setFiles(prev => [newFile, ...prev]);
//             setTotalFiles(prev => prev + 1);
//         } catch (error) {
//             console.error("File upload error:", error);
//             setIsUploading(false);
//             setUploadProgress(0);
//         }
//     };

//     const uploadToIPFS = async (file) => {
//         try {
//             return "QmSomeIPFSHash";
//         } catch (error) {
//             console.error("Error uploading to IPFS:", error);
//             throw error;
//         }
//     };

//     const storeFiles = async (email, ipfsHash) => {
//         try {
//             console.log("Storing file metadata for:", email, ipfsHash);
//         } catch (error) {
//             console.error("Error storing file:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col min-h-screen">
//             <Header />
//             <div className="flex flex-1">
//                 <Sidebar />
//                 <div className="flex flex-col items-center justify-center flex-1 p-6 text-[#b5b25c]">
//                     <h1 className="text-3xl font-bold">My Files</h1>
//                     <p className="text-muted-foreground mt-1">
//                         Securely stored on IPFS and verified with your DID
//                     </p>
//                     <button className='bg-[#b5b25c] p-2 px-4 rounded-lg text-white cursor-pointer mt-4'>Upload</button>
//                     <div className='mt-4'>
//                         <p>Total Files: {totalFiles}</p>
//                     </div>
//                     <div className='p-8 border rounded-lg shadow-xl w-[70vw] h-[300px] flex flex-col items-center justify-center bg-white mt-6'>
//                         <div className="text-5xl mb-4">📁</div>
//                         <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//                             <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                                 <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                                 <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//                             </div>
//                             <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
//                         </label>
//                         {fileChosen && <p>File chosen: {chosenFileName}</p>}
//                     </div>
//                     {totalFiles < 1 ? (
//                         <>
//                             <h3 className="text-xl font-medium mt-[30px]">No Files yet</h3>
//                             <p className="text-muted-foreground">Upload your first file to get started</p>
//                         </>
//                     ) : (<div></div>)}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FileUploader;


import React, { useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const FileUploader = () => {
    const [files, setFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const [totalFiles, setTotalFiles] = useState(0);
    const [fileChosen, setFileChosen] = useState(false);
    const [chosenFileName, setChosenFileName] = useState('');
    const [verificationDetails, setVerificationDetails] = useState({});

    const handleFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFileChosen(true);
            setChosenFileName(file.name);
            await handleFileUpload(file);
        } else {
            setFileChosen(false);
            setChosenFileName('');
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
                }),
                ipfsHash,
                email: '',
                reason: ''
            };
            setFiles(prev => [newFile, ...prev]);
            setTotalFiles(prev => prev + 1);
        } catch (error) {
            console.error("File upload error:", error);
            setIsUploading(false);
            setUploadProgress(0);
        }
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
            console.log("Storing file metadata for:", email, ipfsHash);
        } catch (error) {
            console.error("Error storing file:", error);
        }
    };

    const handleVerificationDetails = (id, field, value) => {
        setFiles(prevFiles => prevFiles.map(file => 
            file.id === id ? { ...file, [field]: value } : file
        ));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex flex-col items-center justify-center flex-1 p-6 text-[#b5b25c]">
                    <h1 className="text-3xl font-bold">My Files</h1>
                    <p className="text-muted-foreground mt-1">
                        Securely stored on IPFS and verified with your DID
                    </p>
                    <button className='bg-[#b5b25c] p-2 px-4 rounded-lg text-white cursor-pointer mt-4'>Upload</button>
                    <div className='mt-4'>
                        <p>Total Files: {totalFiles}</p>
                    </div>
                    <div className='p-8 border rounded-lg shadow-xl w-[70vw] h-[300px] flex flex-col items-center justify-center bg-white mt-6'>
                        <div className="text-5xl mb-4">📁</div>
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                        {fileChosen && <p>File chosen: {chosenFileName}</p>}
                    </div>
                    {totalFiles < 1 ? (
                        <>
                            <h3 className="text-xl font-medium mt-[30px]">No Files yet</h3>
                            <p className="text-muted-foreground">Upload your first file to get started</p>
                        </>
                    ) : (
                        <div className='mt-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {files.map(file => (
                                <div key={file.id} className='border p-4 rounded-lg shadow-md bg-white cursor-pointer' onClick={() => {}}>
                                    <h3 className='text-lg font-bold'>{file.name}</h3>
                                    <p className='text-sm text-gray-600'>{file.size} - {file.dateUploaded}</p>
                                    <input 
                                        type='email' 
                                        placeholder='Enter organization email' 
                                        className='w-full mt-2 p-2 border rounded' 
                                        value={file.email} 
                                        onChange={(e) => handleVerificationDetails(file.id, 'email', e.target.value)}
                                    />
                                    <input 
                                        type='text' 
                                        placeholder='Reason for verification' 
                                        className='w-full mt-2 p-2 border rounded' 
                                        value={file.reason} 
                                        onChange={(e) => handleVerificationDetails(file.id, 'reason', e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileUploader;