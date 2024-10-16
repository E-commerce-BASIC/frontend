"use strict";
exports.id = 2819;
exports.ids = [2819];
exports.modules = {

/***/ 72819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OrderList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(54997);
;// CONCATENATED MODULE: ./components/button/Btn.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import { Invoices } from "@/Context/InvoicesProvider";
function Btn({ Color, order_id }) {
    // const { Invoice } = useContext(Invoices); // Use both from Invoices context
    const Invoice = async ()=>{
        try {
            // Fetch the invoice data from the API
            const { data } = await axios/* default */.Z.get(`/api/invoice?order_id=${order_id}`);
            const pdfFileName = data.message.invoice.invoice; // Get the invoice file name
            // Construct the PDF URL
            const pdfUrl = `/invoices/${pdfFileName}`;
            // Open the PDF in a new tab
            if (pdfUrl) {
                window.open(pdfUrl, "_blank");
            } else {
                console.error("No PDF URL found");
            }
        } catch (error) {
            console.error("Error fetching invoice:", error);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: Invoice,
            className: `${Color} hover:bg-red-600 text-white font-bold py-1 px-4 rounded`,
            children: "PDF"
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(9598);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./Context/Context.js
var Context = __webpack_require__(67805);
;// CONCATENATED MODULE: ./components/order_list/Items.js







function Items({ Processing, Color, date, T_id, order_id, x, backgroundColorClass }) {
    const router = (0,navigation.usePathname)();
    // console.log(router, "<-------");
    const { tracking, setTracking, TrackingData, setTrackingData } = (0,react_.useContext)(Context.Context);
    const statusClasses = {
        Completed: "bg-green-500",
        Processing: "bg-yellow-300",
        Dispatched: "bg-gray-500",
        AddToCart: "bg-red-400",
        Refund: "bg-red-700",
        Placed: "bg-purple-600"
    };
    // Extracting the order status
    // const orderStatus = tracking;
    // const backgroundColorClass = statusClasses[Processing] || ""; // Fallback to empty string if status is unknown
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>console.log(statusClasses[Processing]),
        className: `w-full flex justify-between text-gray-600 items-center mb-6  p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out ${statusClasses[Processing]}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "font-medium text-sm text-white",
                children: [
                    "#",
                    x?.invoice?.tracking?.tracking_no
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-sm text-white",
                children: date
            }),
            router != "/dashboard/Orders" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `text-white ${Processing == "Completed" && "bg-green-500" || Processing == "Processing" && "bg-yellow-300" || Processing == "Dispatched" && "bg-gray-500" || Processing == "AddToCart" && "bg-red-400" || Processing == "Placed" && "bg-purple-600"} rounded-full px-3 py-1 text-xs font-semibold`,
                children: Processing
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    onChange: async (e)=>{
                        await axios/* default */.Z.post("/api/Admin/order_status", {
                            newStatus: e.target.value,
                            order_id
                        });
                        await window.location.reload();
                    },
                    value: Processing,
                    id: "status",
                    className: "block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "Processing",
                            children: "Processing"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "Completed",
                            children: "Completed"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "Refund",
                            children: "Refund"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "Dispatched",
                            children: "Dispatched"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "AddToCart",
                            children: "Add To Cart"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "Placed",
                            children: "Placed"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Btn, {
                Color: "bg-black",
                order_id: order_id
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(64731);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./components/order_list/OrderList.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




function OrderList() {
    const [Order, setOrder] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        const fetchOrders = async ()=>{
            try {
                const response = await axios/* default */.Z.get("/api/invoice/all_orders"); // Make the API call
                setOrder(response.data.message); // Update state with the fetched orders
            } catch (error) {
                console.error("Error fetching orders:", error); // Log any errors
            }
        };
        fetchOrders(); // Invoke the async function
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-100 py-10",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-7xl mx-auto px-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-white shadow-lg rounded-lg p-8 w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-center text-3xl font-bold mb-8 text-gray-800",
                        children: "Order History"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full flex justify-between gap-6 text-gray-700 font-semibold text-base border-b-2 pb-4 mb-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-span-1",
                                children: "Order ID"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-span-2",
                                children: "Order Date"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-span-1",
                                children: "Status"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-span-2",
                                children: "Action"
                            })
                        ]
                    }),
                    Order.map((x, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Items, {
                            Processing: x.order_status,
                            date: moment_default()(x.createdAt).format("LLLL"),
                            T_id: `#${x.id}`,
                            order_id: x.id,
                            x: x
                        }, i);
                    })
                ]
            })
        })
    });
}


/***/ })

};
;