'use client';
import { FormQrCode } from "@/components/FormsQrCode";
import { QrCode } from "@/components/QrCode";
import { useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);

  return (
    <div className="md:max-w-screen-xl md:mx-auto p-6  ">
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Crie seu qrcode com sua <span> </span>
        <span
          className="underline underline-offset-3 decoration-8 decoration-greenBase dark:decoration-blue-600">
          chave pix.
        </span>
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Insira seus dados.</p>
      <div className="md:flex md:space-x-6 md:justify-between md:max-w-[880px]">

        <FormQrCode setImageUrl={setImageUrl} setShowQrCode={setShowQrCode} />
        {showQrCode && <QrCode imageUrl={imageUrl} />}
      </div>
    </div>
  );
}
