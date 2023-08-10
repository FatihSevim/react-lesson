import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { count } = useSelector((state) => state.counter);

    return (
        <div className="App">
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                -
            </button>
            <span>{count}</span>
            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                +
            </button>
            <a href="/products">products</a>
            <button
                onClick={() => {
                    navigate("products");
                }}
            >
                products
            </button>
        </div>
    );
}

export default App;
