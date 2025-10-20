
import React from 'react';

interface MenuItemProps {
  imgSrc: string;
  name: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imgSrc, name, description, price }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={imgSrc} alt={name} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-4 text-sm h-12">{description}</p>
      <div className="text-lg font-bold text-orange-500">{price}</div>
    </div>
  </div>
);

const MenuPage: React.FC = () => {
    const riceBowls = [
        {
            imgSrc: 'https://picsum.photos/400/300?image=660',
            name: 'Chicken Teriyaki Bowl',
            description: 'Ayam panggang dengan saus teriyaki manis di atas nasi pulen.',
            price: 'Rp 35.000'
        },
        {
            imgSrc: 'https://picsum.photos/400/300?image=582',
            name: 'Beef Black Pepper Bowl',
            description: 'Daging sapi empuk dengan saus lada hitam pedas dan paprika.',
            price: 'Rp 42.000'
        },
        {
            imgSrc: 'https://picsum.photos/400/300?image=431',
            name: 'Salmon Mentai Bowl',
            description: 'Potongan salmon segar dengan saus mentai creamy yang dibakar.',
            price: 'Rp 48.000'
        }
    ];

    return (
        <div className="container mx-auto px-6 py-12 fade-in">
            <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">Menu Spesial Kami</h2>
            <p className="text-center text-gray-600 mb-12">Pilihan terbaik untuk memanjakan lidah Anda.</p>
            
            <section id="rice-bowls" className="mb-16">
                <h3 className="text-3xl font-semibold mb-8 text-orange-500 border-b-2 border-orange-200 pb-2">Rice Bowls</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {riceBowls.map(item => <MenuItem key={item.name} {...item} />)}
                </div>
            </section>
        </div>
    );
};

export default MenuPage;
