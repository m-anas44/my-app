"use client";
import { useReducer } from "react";
function reducer(state: any, action: any) {
    if (action.type === "increment") {
        return state + 1;
    }
    if (action.type === "decrement") {
        return state - 1;
    }
    if (action.type === "reset") {
        return state = 0;
    }
}
export default function Home() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div className="min-h-screen grid place-content-center">
            <div className="max-w-sm bg-slate-950 p-5 rounded-xl shadow-2xl">
                <h1 className="text-center font-bold text-white text-4xl">Counter App</h1>
                <div className="rounded-xl max-w-sm mx-auto bg-slate-300 mt-10 p-4">
                    <div className="text-center p-16 bg-white rounded-md text-4xl">
                        {state}
                    </div>
                    <div className="flex items-center mt-3 gap-x-3">
                        <button type="button"
                            onClick={() => dispatch({ type: "increment" })}
                            className="bg-green-700 p-3 rounded-md font-semibold text-white flex-grow">Increment</button>
                        <button type="button"
                            onClick={() => dispatch({ type: "decrement" })}
                            className="bg-red-700 p-3 rounded-md font-semibold text-white flex-grow">Decrement</button>
                        <button type="button"
                            onClick={() => dispatch({ type: "reset" })}
                            className="bg-black p-3 rounded-md font-semibold text-white flex-grow">Reset</button>
                    </div>
                </div>
            </div>

        </div>
    )
}