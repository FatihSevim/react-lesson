import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProd, setProds } from "../store/slices/products";

export default function Products() {
    const dispatch = useDispatch();

    const { prods } = useSelector((state) => state.products);

    const [index, setIndex] = useState("");

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res);
                dispatch(setProds(res.data.products));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <input
                type="text"
                value={index}
                onChange={(e) => {
                    setIndex(e.target.value);
                }}
                placeholder="Remove by ID"
            />
            <button
                onClick={() => {
                    dispatch(removeProd(parseInt(index)));
                }}
            >
                remove
            </button>
            <div>
                {prods.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <span>
                                {prod.title} <br />
                            </span>
                            <button
                                onClick={() => {
                                    dispatch(removeProd(prod.id));
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
