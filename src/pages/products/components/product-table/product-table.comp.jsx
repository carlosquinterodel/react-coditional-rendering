import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import './product-table.style.css'


const ProductTable = () => {
    return (
        <div className = "product-table-container">

            <ProductCategoryRow name="Programming 1"/>
            <ProductRow name="Pepito" grade="3.5" gender="Male"/>
            <ProductRow name="Maria" grade="2.1" gender="Female"/>
            <ProductRow name="Carlitos" grade="2" gender="Male"/>
            <ProductCategoryRow name="Programming 2"/>
            <ProductRow name="Miguel" grade="3.5" gender="Male"/>
            <ProductRow name="Natalia" grade="2.1" gender="Female"/>
        </div>
    );
}

export default ProductTable ;