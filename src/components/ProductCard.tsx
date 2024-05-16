import React from 'react';
import './ProductCard.css'; 
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';


const ProductCard: React.FC = () => {
  const info = useSelector((state: RootState) => state.table.productData);
  return (
    <div className="product-card">
      <img src={info.image} alt="Product" className="product-image" />
      <div className="product-info">
        <h3>{info.title}</h3>
        <p>{info.subtitle}</p>
        <div className="tags">
          {info.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
