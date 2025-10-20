
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-white fade-in">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang BowlBliss</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
                Kisah kami dimulai dari dapur sederhana dengan kecintaan pada makanan yang praktis, lezat, dan bergizi. BowlBliss lahir untuk menyajikan kebahagiaan dalam sebuah mangkuk.
            </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img 
                    src="https://picsum.photos/600/400?image=1060" 
                    alt="Our Team"
                    className="rounded-lg shadow-xl"
                />
            </div>
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-2">Visi Kami</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Menjadi pilihan utama bagi pecinta kuliner yang mencari makanan cepat saji berkualitas tinggi, inovatif, dan terjangkau di seluruh Indonesia.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-2">Misi Kami</h3>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                        <li>Menyajikan hidangan rice bowl dan cemilan dengan rasa otentik dan bahan-bahan segar.</li>
                        <li>Memberikan pelayanan yang ramah, cepat, dan memuaskan bagi setiap pelanggan.</li>
                        <li>Terus berinovasi dalam menciptakan menu-menu baru yang sesuai dengan selera pasar.</li>
                        <li>Membangun lingkungan kerja yang positif dan mendukung pertumbuhan setiap anggota tim.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
