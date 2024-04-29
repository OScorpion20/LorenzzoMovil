import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Product} from '../model/Product';

export type Props = {
  product?: Product;
  productJson: string;
};

function ProductDetails({productJson}: Props): React.JSX.Element {
  const [product, setProduct] = useState();
  useEffect(() => {
    console.log(productJson);
    setProduct(JSON.parse(productJson));
  }, [productJson]);
  return (
    <SafeAreaView>
      {product && (
        <View>
          <Text>{product.nombre}</Text>
          <Text>{product.currentStock}</Text>
          <Text>{product.precio}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default ProductDetails;
