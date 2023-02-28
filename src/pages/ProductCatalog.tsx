import { Component } from "react";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

type ProductCatalogProps = {};

type ProductCatalogState = {
  itemDetails: {
    itemId?: string;
    itemName?: string;
    itemImageLink: string;
    pricePerItem?: number;
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
          pricePerItem: 435,
          inStock: true,
        },
        {
          itemId: "2",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          pricePerItem: 435,
          inStock: false,
        },
        {
          itemId: "3",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          pricePerItem: 435,
          inStock: true,
        },
        {
          itemId: "4",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          pricePerItem: 435,
          inStock: false,
        },
        {
          itemId: "5",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          pricePerItem: 435,
          inStock: true,
        },
        {
          itemId: "6",
          itemName: "Nespray",
          itemImageLink:
            "https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg",
          pricePerItem: 435,
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
