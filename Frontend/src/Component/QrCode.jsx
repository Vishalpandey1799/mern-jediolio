import { useState, useRef, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import Apicalls from '../store/apicalls.js';

const QrCode = () => {
    const { newSlug, userData } = Apicalls();
    const [profileImgBase64, setProfileImgBase64] = useState('');
    const qrCodeRef = useRef(null);

    // Convert profile image to base64
    useEffect(() => {
        if (!userData?.profileImage) return;

        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = userData.profileImage || "https://imgs.search.brave.com/tmb-_ppokg0tf9t1IdHCzHLn35Ap2LjgJmiGPy_xF3w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlmLzE2/LzcyLzlmMTY3Mjcx/MGNiYTZiY2IwZGZk/OTMyMDFjNmQ0YzAw/LmpwZw";

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const base64 = canvas.toDataURL('image/png');
            setProfileImgBase64(base64);
        };
    }, [userData?.profileImage]);

    // Download QR code as PNG
    const downloadQRCode = () => {
        const qrCodeElement = qrCodeRef.current;

        html2canvas(qrCodeElement).then((canvas) => {
            const imageUrl = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'qrcode.png';
            link.click();
        });
    };

    // If newSlug or userData is not available, render nothing
    if (!newSlug || !userData) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto h-[400px]">
            {/* Header */}
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-amber-950 border border-gray-800 p-1">Profile QR</span>
                <button
                    onClick={downloadQRCode}
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    <Download className="mr-2" size={18} />
                    Download
                </button>
            </div>

            {/* QR Code with Profile Image */}
            <div ref={qrCodeRef} className="relative flex justify-center mt-4">
                <QRCodeSVG
                    value={`http://localhost:5173/user/portfolio/${newSlug}`}
                    size={250}
                    fgColor="#000000"
                    bgColor="#ffffff"
                    level="H"
                />

                {/* Profile Image Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <img
                        src={profileImgBase64 || userData.profileImage}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                    />
                    <p className="text-sm font-medium mt-2 px-2 py-1 rounded-md shadow-sm">
                        {userData.name || 'Vishal Pandey'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QrCode;