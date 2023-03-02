import { Component } from "react";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

type ProductCatalogProps = {};

type ProductCatalogState = {
  itemDetails: {
    itemId: string;
    itemName: string;
    itemImageLink: string;
    pricePerItem: number;
    inStock: boolean;
  }[];
};

export default class ProductCatalog extends Component<
  ProductCatalogProps,
  ProductCatalogState
> {
  constructor(props: ProductCatalogProps) {
    super(props);

    this.state = {
      itemDetails: [
        {
          itemId: "1",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          pricePerItem: 100,
          inStock: true,
        },
        {
          itemId: "2",
          itemName: "Anchor",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/03/Anchor-1-kg.jpg",
          pricePerItem: 200,
          inStock: false,
        },
        {
          itemId: "3",
          itemName: "Raththi",
          itemImageLink:
            "https://r-mart.shophere.lk/wp-content/uploads/2021/05/image-1.jpg",
          pricePerItem: 300,
          inStock: true,
        },
        {
          itemId: "4",
          itemName: "Viva",
          itemImageLink:
            "https://www.kapruka.com/cdn-cgi/image/width=700,quality=93,f=auto/shops/specialGifts/productImages/1591883992302_VivaMaltedFoodDrinkCarton400g_M.jpg",
          pricePerItem: 400,
          inStock: false,
        },
        {
          itemId: "5",
          itemName: "Nestle",
          itemImageLink: "https://m.media-amazon.com/images/I/71x9onReBAL.jpg",
          pricePerItem: 500,
          inStock: true,
        },
        {
          itemId: "6",
          itemName: "Horlicks",
          itemImageLink:
            "https://www.chemist365.lk/wp-content/uploads/2021/03/Horlicks-400g.jpg",
          pricePerItem: 600,
          inStock: false,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Title text="Products Catalog" />
        <div className="mt-4">
          <div className="grid grid-cols-5 gap-4">
            {this.state.itemDetails.map((item) => (
              <ProductCard key={item.itemId} itemDetails={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
