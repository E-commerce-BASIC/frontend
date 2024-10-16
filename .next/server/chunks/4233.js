exports.id = 4233;
exports.ids = [4233];
exports.modules = {

/***/ 56270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20346));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67805));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23221));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86376));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 15205));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20203));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 80259));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53200));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47621));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 32363));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72325));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 45578, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 10345))

/***/ }),

/***/ 82667:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 20203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminContext: () => (/* binding */ AdminContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AdminContext,default auto */ 


const AdminContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AdminProvider = ({ children })=>{
    const [totalUser, setTotalUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [totalProduct, setTotalProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const AllUser = async ()=>{
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get("/api/alluser");
            setTotalUser(data.data);
        };
        AllUser();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const Allproducts = async ()=>{
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get("/api/allproducts");
            setTotalProduct(data.data);
        };
        Allproducts();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdminContext.Provider, {
        value: {
            totalUser,
            totalProduct
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminProvider);


/***/ }),

/***/ 80259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Billing: () => (/* binding */ Billing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ Billing,default auto */ 

// import { headers } from "next/headers";

const Billing = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const BillingProvider = ({ children })=>{
    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        full_name: "",
        address: "",
        city: "",
        country: "",
        email: "",
        phone_no: "",
        payment_methode: "",
        tax_info: ""
    });
    const Billing_info_api = async ()=>{
        // console.log(formData)
        try {
            const billing = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post("/api/checkout/billing", {
                // data: {
                full_name: formData.full_name,
                address: formData.address,
                city: formData.city,
                country: formData.country,
                email: formData.email,
                phone_no: formData.phone_no,
                payment_methode: formData.payment_methode
            }); // Send as JSON
            console.log(billing, "<========================");
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Billing.Provider, {
        value: {
            formData,
            setFormData,
            currentStep,
            setCurrentStep,
            Billing_info_api
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingProvider);


/***/ }),

/***/ 15205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartContext: () => (/* binding */ CartContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67805);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10345);
/* __next_internal_client_entry_do_not_use__ CartContext,default auto */ 




const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const CartProvider = ({ children })=>{
    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_2__.Context);
    const [cartdetails, setCartDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        quantity: 1
    });
    // add item to cart
    const addItemToCart = async (e)=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("/api/cart", {
                items: [
                    {
                        productId: e.id,
                        image: e.mainImage,
                        price: e.price,
                        name: e.name,
                        quantity: cartdetails.quantity
                    }
                ]
            });
            res?.data?.message === "Item added" ? react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success(res?.data?.message) : react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(res?.data?.message);
            setCartDetails({
                quantity: 1
            });
        } catch (error) {
            console.log(error);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("An error occurred");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cartdetails,
            setCartDetails,
            addItemToCart
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartProvider);


/***/ }),

/***/ 67805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54997);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27487);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10345);
/* __next_internal_client_entry_do_not_use__ Context,default auto */ 





const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const ContextProvider = ({ children })=>{
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [tracking, setTracking] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [TrackingData, setTrackingData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [signup, setSignUp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        username: "",
        email: "",
        password: ""
    });
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        username: "",
        password: ""
    });
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // sign up user
    const handleSignUpSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.post("/api/signup", signup);
            // console.log({response},"<-------------")
            setLoading(false);
            setError(response.data.status !== 201);
            setMessage(response.data.message);
            if (response.data.message === "User Registered Successfully") {
                router.push("/loginpage");
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("User created successfully");
                setSignUp({
                    username: "",
                    email: "",
                    password: ""
                });
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            setError(true);
        }
    };
    // login user
    const handleLoginSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.post("/api/login", login);
            setLoading(false);
            setError(response.data.status !== 201);
            setMessage(response.data.message);
            if (response.data.message === "User login successfully") {
                router.push("/");
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("User login successfully");
                setLogin({
                    username: "",
                    password: ""
                });
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            setError(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (error) {
            setTimeout(()=>{
                setError(false);
                setMessage("");
            }, 3500);
        }
    }, [
        error
    ]);
    // get user info
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let debouncedCurrentUser;
        const fetchUser = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get("/api/login-user");
                setUser(response.data);
            } catch (error) {
                setUser(null);
                console.log(error);
            }
        };
        debouncedCurrentUser = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(fetchUser, 1500);
        debouncedCurrentUser();
        return ()=>{
            debouncedCurrentUser.cancel();
        };
    }, [
        login
    ]);
    // logout user
    const handleLogout = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.get("/api/logout");
            setUser(null);
            router.push("/loginpage");
        } catch (error) {
            console.log(error);
        }
    };
    // useEffect(() => {
    //   if (!user?.isAdmin) {
    //     router.push("/");
    //   }
    // }, [user?.isAdmin, router]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            signup,
            setSignUp,
            handleSignUpSubmit,
            loading,
            error,
            message,
            login,
            setLogin,
            handleLoginSubmit,
            user,
            handleLogout,
            tracking,
            setTracking,
            TrackingData,
            setTrackingData
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);


/***/ }),

/***/ 86376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductContext: () => (/* binding */ ProductContext),
/* harmony export */   ProductContextProvider: () => (/* binding */ ProductContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10345);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ ProductContext,ProductContextProvider auto */ 




// import { cookies } from "next/headers";
const ProductContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ProductContextProvider = ({ children })=>{
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [quantity, setquantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [brand, setbrand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [rating, setrating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [discount, setdiscount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [variants, setvariants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // create Product
    const fetchProduct = async (e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category_name", category);
        formData.append("image", file); // Append the file
        formData.append("uploading", uploading);
        formData.append("quantity", quantity);
        formData.append("brand", brand);
        formData.append("rating", rating);
        formData.append("discount", discount);
        formData.append("tags", JSON.stringify(selectedTags));
        try {
            if (uploading) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Please wait while image is uploading");
                return;
            }
            const res = await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("/api/product", formData, {
                headers: {
                    "Content-Type": "multipart/formdata"
                }
            });
            setName(""), setPrice(""), setDescription(""), setCategory(""), setFile(null), setMedia(""), setUploading(false), setSelectedTags([]), setquantity(""), setbrand(""), setrating(""), setdiscount(""), setvariants("");
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error(error.message);
            console.log(error);
            return;
        }
    };
    //  get all products
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get("/api/product").then((res)=>{
            // console.log(res,"<======")
            setProducts(res.data);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductContext.Provider, {
        value: {
            uploading,
            setMedia,
            fetchProduct,
            name,
            setName,
            price,
            setPrice,
            description,
            setDescription,
            category,
            setCategory,
            file,
            setFile,
            media,
            products,
            quantity,
            brand,
            rating,
            discount,
            setquantity,
            setbrand,
            setrating,
            setdiscount,
            setvariants,
            selectedTags,
            setSelectedTags
        },
        children: children
    });
};


/***/ }),

/***/ 32363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallmentContext: () => (/* binding */ InstallmentContext),
/* harmony export */   InstallmentContextProvider: () => (/* binding */ InstallmentContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10345);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ InstallmentContext,InstallmentContextProvider auto */ 




const InstallmentContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const InstallmentContextProvider = ({ children })=>{
    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [installment, setInstallment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        address: "",
        idCard: "",
        passport: "",
        visa: "",
        passport_image: null,
        visa_image: null,
        salary_slip_image: null,
        id_card: null
    });
    // create Product
    const fetchProduct = async (e)=>{
        e.preventDefault();
        // console.log(installment)
        // return false
        let formData = new FormData();
        formData.append("name", installment.name);
        formData.append("address", installment.address);
        formData.append("idCard", installment.idCard);
        formData.append("passport", installment.passport);
        formData.append("visa", installment.visa);
        formData.append("passport_image", installment.passport_image);
        formData.append("visa_image", installment.visa_image);
        formData.append("salary_slip_image", installment.salary_slip_image);
        try {
            if (uploading) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error("Please wait while image is uploading");
                return;
            }
            await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("/api/checkout/installment", formData);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error(error.message);
            console.log(error);
            return;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InstallmentContext.Provider, {
        value: {
            installment,
            setInstallment,
            fetchProduct
        },
        children: children
    });
};


/***/ }),

/***/ 47621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Invoices: () => (/* binding */ Invoices),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ Invoices,default auto */ 


const Invoices = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const InvoicesProvider = ({ children })=>{
    const [Order_id, setOrder_id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const Invoice = async ()=>{
        try {
            // Fetch the invoice data from the API
            const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get(`/api/invoice?order_id=${Order_id}`);
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Invoices.Provider, {
        value: {
            Invoice,
            Order_id,
            setOrder_id
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoicesProvider);


/***/ }),

/***/ 53200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bank: () => (/* binding */ bank),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ bank,default auto */ 

// import { headers } from "next/headers";

const bank = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const paymentProvider = ({ children })=>{
    const [Payment_details, setPayment_details] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        payment_methode: "Cash on delievery",
        currency: "pk"
    });
    const Payment = async ()=>{
        try {
            const bank = await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.post("/api/checkout/bank", {
                payment_methode: formData.payment_methode,
                currency: formData.currency
            }); // Send as JSON
            setPayment_details(bank);
        // console.log(bank, "<========================");
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(bank.Provider, {
        value: {
            Payment,
            Payment_details
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paymentProvider);


/***/ }),

/***/ 23221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67805);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Footer = ()=>{
    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_1__.Context);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !user?.data?.isAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[97%] mx-auto my-5",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 rounded-lg bg-indigo-500 p-6 shadow-lg sm:flex-row sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                            className: "text-xl text-white sm:text-xl capitalize text-center md:text-start",
                            children: [
                                " ",
                                "contact us ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#12171D]",
                                    children: " now "
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-xs text-white my-2 w-full text-center md:text-start ",
                                    children: [
                                        "for more information about our services and products, please visit our website",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/riteshk-007/nextjs-store",
                                            className: "text-[#F59E0B]",
                                            target: "_blank",
                                            children: "GitHub"
                                        }),
                                        " ",
                                        "OR click this link"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "inline-flex items-center gap-2 rounded-full border border-[#12171D] bg-[#000000] px-8 py-3 text-white hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus:ring active:bg-white/90",
                            href: "/contact",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: " Lets Get Started "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: "h-5 w-5 rtl:rotate-180",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "bg-white lg:grid lg:grid-cols-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative block h-32 lg:col-span-2 lg:h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
                            alt: "footer",
                            className: "absolute inset-0 h-full w-full object-cover"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-1 gap-8 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-xs uppercase tracking-wide text-gray-500",
                                                        children: [
                                                            " ",
                                                            "Call us",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#!",
                                                        className: "block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl",
                                                        children: "0123456789"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "mt-8 flex gap-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: "https://www.facebook.com/people/Ritesh-Kumar/pfbid02RqD5hmgCY4Ha6NmTBvq2Lj8RzN4J4yyMZQgYJ14rwMe8MAUHBwu9HUz8ZR7BVURKl/?mibextid=ZbWKwL",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "text-gray-700 transition hover:opacity-75",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: "Facebook"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    className: "h-6 w-6",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    "aria-hidden": "true",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                                                        clipRule: "evenodd"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: "https://www.instagram.com/riteshk_007/?igshid=MzNlNGNkZWQ4Mg%3D%3D",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "text-gray-700 transition hover:opacity-75",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: "Instagram"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    className: "h-6 w-6",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    "aria-hidden": "true",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                                                        clipRule: "evenodd"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: "https://twitter.com/Riteshk_007",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "text-gray-700 transition hover:opacity-75",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: "Twitter"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    className: "h-6 w-6",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    "aria-hidden": "true",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: "https://github.com/riteshk-007",
                                                            rel: "noreferrer",
                                                            target: "_blank",
                                                            className: "text-gray-700 transition hover:opacity-75",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: "GitHub"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    className: "h-6 w-6",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    "aria-hidden": "true",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                                                        clipRule: "evenodd"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Services"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "mt-6 space-y-4 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "Clothing Style"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "Fashion Design"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "Design"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "Branding"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "Marketing"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-medium text-gray-900",
                                                        children: "Company"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "mt-6 space-y-4 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "About",
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "Contact",
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: "#!",
                                                                    className: "text-gray-700 transition hover:opacity-75",
                                                                    children: [
                                                                        " ",
                                                                        "Accounts Review",
                                                                        " "
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-12 border-t border-gray-100 pt-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sm:flex sm:items-center sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "flex flex-wrap gap-4 text-xs",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#!",
                                                        className: "text-gray-500 transition hover:opacity-75",
                                                        children: [
                                                            " ",
                                                            "Terms & Conditions",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#!",
                                                        className: "text-gray-500 transition hover:opacity-75",
                                                        children: [
                                                            " ",
                                                            "Privacy Policy",
                                                            " "
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "#!",
                                                        className: "text-gray-500 transition hover:opacity-75",
                                                        children: [
                                                            " ",
                                                            "Cookies",
                                                            " "
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-8 text-xs text-gray-500 sm:mt-0",
                                            children: "\xa9 2024. Ritesh Clothing Store . All rights reserved."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 20346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(60930);
// EXTERNAL MODULE: ./Context/Context.js
var Context = __webpack_require__(67805);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./components/Mobile.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Mobile = ({ setIsOpen, categories })=>{
    const { user, handleLogout } = (0,react_.useContext)(Context.Context);
    const name = user?.data?.Info?.profile?.full_name?.replace(/ .*/, "");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-screen flex-col justify-between border-e bg-white",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "px-4 py-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            onClick: ()=>setIsOpen(false),
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                id: "logo-70",
                                width: "68",
                                height: "20",
                                viewBox: "0 0 78 30",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z",
                                        className: "ccustom",
                                        fill: "#394149"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z",
                                        className: "ccustom",
                                        fill: "#394149"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "mt-6 space-y-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        onClick: ()=>setIsOpen(false),
                                        className: "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700",
                                        children: "Home"
                                    })
                                }),
                                user?.data?.isAdmin && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/dashboard",
                                        onClick: ()=>setIsOpen(false),
                                        className: "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                        children: "Admin"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
                                        className: "group [&_summary::-webkit-details-marker]:hidden",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("summary", {
                                                className: "flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-sm font-medium",
                                                        children: " Categories "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "shrink-0 transition duration-300 group-open:-rotate-180",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "mt-2 space-y-1 px-4",
                                                children: categories?.map((category)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/category/${category}`,
                                                            className: "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                                            children: category
                                                        })
                                                    }, category);
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        onClick: ()=>setIsOpen(false),
                                        className: "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/products",
                                        onClick: ()=>setIsOpen(false),
                                        className: "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                        children: "Products"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
                                        className: "group [&_summary::-webkit-details-marker]:hidden",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("summary", {
                                                className: "flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-sm font-medium",
                                                        children: " Account "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "shrink-0 transition duration-300 group-open:-rotate-180",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "mt-2 space-y-1 px-4",
                                                children: user?.data ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "submit",
                                                        onClick: ()=>{
                                                            handleLogout();
                                                            setIsOpen(false);
                                                        },
                                                        className: "w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700",
                                                        children: "Logout"
                                                    })
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/loginpage",
                                                            onClick: ()=>setIsOpen(false),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                className: "w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700",
                                                                children: "Login"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/signupPage",
                                                            onClick: ()=>setIsOpen(false),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                className: "w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700",
                                                                children: "Register"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky inset-x-0 bottom-0 border-t border-gray-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "flex items-center gap-2 bg-white p-4 hover:bg-gray-50",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: user?.data ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-xs",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        className: "block font-medium",
                                        children: name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            " ",
                                            user?.data?.Info?.email,
                                            " "
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    className: "block font-medium",
                                    children: "Welcome to our store"
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Mobile = (Mobile);

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(82596);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 24 modules
var dialog = __webpack_require__(53748);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(57048);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(54997);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./utils/Button.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Button = ({ setIsCartOpen })=>{
    const route = (0,navigation.useRouter)();
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        disabled: isLoading,
        onClick: ()=>(route.push("/checkout"), setIsCartOpen(false)),
        className: `flex w-full items-center justify-center rounded-md border border-transparent bg-[#2f4550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#2f4550] ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`,
        children: isLoading ? "Processing..." : " Proceed to checkout"
    });
};
/* harmony default export */ const utils_Button = (Button);

;// CONCATENATED MODULE: ./components/SideCart.js









const SideCart = ({ setIsCartOpen, isCartOpen })=>{
    const { user } = (0,react_.useContext)(Context.Context);
    const [usersCart, setUserCart] = (0,react_.useState)([]);
    const totalPrice = usersCart?.reduce((total, order)=>total + order?.order_items?.reduce((subtotal, orderItem)=>subtotal + orderItem?.price * orderItem?.quantity, 0), 0);
    const getCart = async ()=>{
        try {
            const res = await axios/* default */.Z.get("/api/cart-item");
            // if (res?.data?.cartItem?.length === 0) {
            //   return null;
            // }
            setUserCart(res?.data?.cartItem);
        } catch (error) {
            console.log(error);
        }
    };
    // get user cart data
    (0,react_.useEffect)(()=>{
        user && getCart();
    }, [
        user
    ]);
    // console.log(usersCart)
    // console.log(user?.data)       
    // remove item from cart
    const removeItem = async (productId)=>{
        try {
            const res = await axios/* default */.Z.post("/api/cart-item/item-delete", {
                id: productId
            });
            if (res.status === 200) {
                getCart();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Root, {
        as: react_.Fragment,
        show: isCartOpen,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V, {
            as: "div",
            className: "relative z-50",
            open: isCartOpen,
            onClose: ()=>setIsCartOpen(false),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                    as: react_.Fragment,
                    enter: "ease-in-out duration-500",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-500",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                                as: react_.Fragment,
                                enter: "transform transition ease-in-out duration-500 sm:duration-700",
                                enterFrom: "translate-x-full",
                                enterTo: "translate-x-0",
                                leave: "transform transition ease-in-out duration-500 sm:duration-700",
                                leaveFrom: "translate-x-0",
                                leaveTo: "translate-x-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.V.Panel, {
                                    className: "pointer-events-auto w-screen max-w-md",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.V.Title, {
                                                                className: "text-lg font-medium text-gray-900",
                                                                children: "Shopping cart"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "ml-3 flex h-7 items-center",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    type: "button",
                                                                    className: "relative -m-2 p-2 text-gray-400 hover:text-gray-500",
                                                                    onClick: ()=>setIsCartOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "absolute -inset-0.5"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "sr-only",
                                                                            children: "Close panel"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                                                            className: "h-6 w-6",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-8",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flow-root",
                                                            children: user?.data?.Info ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                role: "list",
                                                                className: "-my-6 divide-y divide-gray-200",
                                                                children: usersCart?.length ? (usersCart?.map((user, userIndex)=>{
                                                                    return /*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
                                                                        children: user.order_items.map((Items, i)=>{
                                                                            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    className: "flex py-6",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            href: `/products/${Items?.product?.id}`,
                                                                                            className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                                                height: 200,
                                                                                                width: 200,
                                                                                                src: "https://api.souqbay.com" + "/uploads/" + Items?.product?.image,
                                                                                                alt: Items?.product?.name,
                                                                                                className: "h-full w-full object-contain object-center"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                            className: "ml-4 flex flex-1 flex-col",
                                                                                            children: [
                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                        className: "flex justify-between text-base font-medium text-gray-900",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                                    href: Items?.product?.id,
                                                                                                                    children: Items?.product?.name
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                                                className: "ml-4",
                                                                                                                children: [
                                                                                                                    "$",
                                                                                                                    Items?.product?.price
                                                                                                                ]
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                    className: "flex flex-1 items-end justify-between text-sm",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                                            className: "text-gray-500",
                                                                                                            children: [
                                                                                                                "Qty ",
                                                                                                                Items?.quantity
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                            className: "flex",
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                                                onClick: ()=>removeItem(Items?.product?.id),
                                                                                                                type: "button",
                                                                                                                className: "font-medium text-[#2f4550] hover:text-[#2f4550]",
                                                                                                                children: "Remove"
                                                                                                            })
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, user?.id)
                                                                            });
                                                                        })
                                                                    }, userIndex);
                                                                }).reverse()) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "flex justify-center items-center h-40",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "text-lg font-medium text-gray-900",
                                                                                children: "Cart is empty"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex justify-center items-center h-40",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-lg font-medium text-gray-900",
                                                                        children: "Login to view cart"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "border-t border-gray-200 px-4 py-6 sm:px-6",
                                                children: [
                                                    user?.data && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between text-base font-medium text-gray-900",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Subtotal"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "$ ",
                                                                    totalPrice,
                                                                    ".00"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    user?.data && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "mt-0.5 text-sm text-gray-500",
                                                        children: "Shipping and taxes calculated at checkout."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-6",
                                                        children: user?.data ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `w-full mx-auto ${totalPrice <= 0 ? "opacity-50 cursor-not-allowed" : ""}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(utils_Button, {
                                                                setIsCartOpen: setIsCartOpen
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/loginpage",
                                                            onClick: ()=>setIsCartOpen(false),
                                                            className: "flex items-center justify-center rounded-md border border-transparent bg-[#2f4550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#2f4550]",
                                                            children: "Login to View Cart"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-6 flex justify-center text-center text-sm text-gray-500",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "or",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                    href: "/products",
                                                                    className: "font-medium text-[#2f4550] hover:text-[#2f4550]",
                                                                    onClick: ()=>setIsCartOpen(false),
                                                                    children: [
                                                                        "Continue Shopping",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            "aria-hidden": "true",
                                                                            children: " →"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_SideCart = (SideCart);

// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(43500);
;// CONCATENATED MODULE: ./components/Header.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Header = ()=>{
    const { tracking, setTracking, TrackingData, setTrackingData } = (0,react_.useContext)(Context.Context);
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const [isCartOpen, setIsCartOpen] = (0,react_.useState)(false);
    const { user, handleLogout } = (0,react_.useContext)(Context.Context);
    const [categories, setCategories] = (0,react_.useState)([]);
    const [isHovered, setIsHovered] = (0,react_.useState)(false);
    const [Search, setSearch] = (0,react_.useState)(0);
    const name = user?.data?.Info?.username.replace(/ .*/, "");
    console.log(user);
    (0,react_.useEffect)(()=>{
        const fetchCategories = async ()=>{
            const res = await axios/* default */.Z.get("/api/category/header_menu_categories");
            console.log(res, "<-------------");
            setCategories(res?.data.data);
        };
        fetchCategories();
    }, []);
    const SearchTracking = async (e)=>{
        e.preventDefault();
        const search = await axios/* default */.Z.post("/api/order/tracking", {
            Search
        });
        console.log(search);
        if (search?.data?.message === "Tracking Found") return setTracking(true), setTrackingData(search);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "bg-white ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            className: "block text-teal-600",
                            href: "/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    id: "logo-70",
                                    width: "78",
                                    height: "30",
                                    viewBox: "0 0 78 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z",
                                            className: "ccustom",
                                            fill: "#394149"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z",
                                            className: "ccustom",
                                            fill: "#394149"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-1 items-center justify-end md:justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    "aria-label": "Global",
                                    className: "hidden md:block w-full",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "flex items-center gap-6 text-sm w-full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "text-gray-800 transition hover:text-gray-800/75 ",
                                                    href: "/about",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "relative",
                                                onMouseEnter: ()=>setIsHovered(true),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/category",
                                                        className: "text-gray-800 transition hover:text-gray-800/75 cursor-pointer ",
                                                        children: "Categories"
                                                    }),
                                                    isHovered && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        onMouseLeave: ()=>setIsHovered(false),
                                                        className: "absolute top-8 left-0 w-48 bg-white shadow-lg rounded-lg py-3 z-50",
                                                        children: categories?.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: `/category/${category.category}`,
                                                                    className: "block px-5 py-2.5 text-sm text-gray-800 transition hover:bg-gray-100",
                                                                    children: category.category
                                                                })
                                                            }, category.id))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "text-gray-800 transition hover:text-gray-800/75 ",
                                                    href: "/products",
                                                    children: "Products"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "text-gray-800 transition hover:text-gray-800/75 ",
                                                    href: "/contact",
                                                    children: "Contact"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "text-gray-800 transition hover:text-gray-800/75 ",
                                                    href: "/order_history",
                                                    children: "Orders"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "w-full px-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-lg w-full",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaSearch */.U41, {
                                                            className: "text-gray-500 text-lg mr-3"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                            onSubmit: SearchTracking,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                onChange: (e)=>setSearch(e.target.value),
                                                                className: "bg-transparent outline-none w-full text-gray-700 placeholder-gray-500",
                                                                placeholder: "Search for tracking ID"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            user?.data?.isAdmin && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "text-gray-800 transition hover:text-gray-800/75 ",
                                                    href: "/dashboard",
                                                    children: "Admin"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            onClick: ()=>setIsCartOpen(!isCartOpen),
                                            className: "text-gray-800 transition hover:text-gray-800/75 cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsBag */.a53, {
                                                fontSize: 19
                                            })
                                        }),
                                        user?.data ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "sm:flex sm:gap-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "hidden rounded-md bg-gray-100 px-4 py-2.5 text-sm font-medium text-[#2f4550] transition hover:text-[#2f4550]/75 sm:block",
                                                    children: name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    onClick: handleLogout,
                                                    className: "hidden cursor-pointer md:block rounded-md bg-[#2f4550] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1c2930] ",
                                                    children: "Logout"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "sm:flex sm:gap-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/loginpage",
                                                    className: "block rounded-md bg-[#2f4550] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1c2930] ",
                                                    children: "Login"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#2f4550] transition hover:text-[#2f4550]/75 sm:block",
                                                    href: "/signupPage",
                                                    children: "Register"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: ()=>setIsOpen(!isOpen),
                                            className: "block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75  md:hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Toggle menu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M4 6h16M4 12h16M4 18h16"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `absolute left-0 top-0 w-52 md:hidden bg-white shadow-lg rounded-lg z-50`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Mobile, {
                    setIsOpen: setIsOpen,
                    categories: categories
                })
            }),
            isCartOpen && /*#__PURE__*/ jsx_runtime_.jsx(components_SideCart, {
                setIsCartOpen: setIsCartOpen,
                isCartOpen: isCartOpen
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 72325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrackingID)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67805);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function TrackingID() {
    const { tracking, setTracking, TrackingData, setTrackingData } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_Context__WEBPACK_IMPORTED_MODULE_1__.Context);
    const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(4);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: tracking ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto p-4 sm:p-10 fixed inset-0 z-20 flex items-center justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>setTracking(false),
                    className: "absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-10 w-full"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative z-30 bg-white shadow-lg rounded-lg p-4 sm:p-8 w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-center text-xl sm:text-2xl font-bold mb-2 sm:mb-4",
                            children: "Track Your Order"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "text-center text-lg sm:text-xl mb-4 sm:mb-6",
                            children: [
                                "#",
                                TrackingData?.data?.data?.tracking_no
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap justify-center sm:pl-10 lg:pl-16",
                            children: [
                                "Placed",
                                "Processing",
                                "Dispatched",
                                "Completed"
                            ].map((step, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: ()=>console.log(TrackingData?.data?.data),
                                    className: "w-1/4 flex flex-col items-center mb-4 sm:mb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `w-8 h-8 rounded-full ${TrackingData?.data?.data?.order?.order_status === step ? "bg-red-500 text-white" : "bg-gray-300 text-black"} flex items-center justify-center mb-2`,
                                            children: index + 1
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `w-full border-t-2 ${TrackingData?.data?.data?.order?.order_status === step ? "border-red-500" : "border-gray-300"}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm font-medium mt-2",
                                                    children: step
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `flex flex-col sm:flex-row justify-between mt-6 sm:mt-10`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 p-4 ",
                                children: [
                                    {
                                        label: "Tracking ID:",
                                        value: `# ${TrackingData?.data?.data?.tracking_no}`
                                    },
                                    {
                                        label: "Ordered Items:",
                                        value: TrackingData?.data?.data?.order?.ordered_items
                                    },
                                    {
                                        label: "Delivery Status:",
                                        value: TrackingData?.data?.data?.order?.order_status
                                    }
                                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center mt-4 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "w-32 sm:w-48 text-base sm:text-lg text-center",
                                                children: item.label
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-base sm:text-lg font-semibold",
                                                children: item.value
                                            })
                                        ]
                                    }, index))
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
    });
}


/***/ }),

/***/ 87957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Montserrat","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_js_import_Montserrat_arguments_subsets_latin_variableName_inter_ = __webpack_require__(46772);
var target_path_app_layout_js_import_Montserrat_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Montserrat_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/nextjs-toploader/dist/index.js
var dist = __webpack_require__(44371);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/Header.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\components\Header.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
;// CONCATENATED MODULE: ./Context/Context.js

const Context_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\Context.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Context_esModule, $$typeof: Context_$$typeof } = Context_proxy;
const Context_default_ = Context_proxy.default;

const e0 = Context_proxy["Context"];


/* harmony default export */ const Context = (Context_default_);
;// CONCATENATED MODULE: ./components/Footer.js

const Footer_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\components\Footer.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Footer_esModule, $$typeof: Footer_$$typeof } = Footer_proxy;
const Footer_default_ = Footer_proxy.default;


/* harmony default export */ const Footer = ((/* unused pure expression or super */ null && (Footer_default_)));
;// CONCATENATED MODULE: ./Context/CreateProduct.js

const CreateProduct_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\CreateProduct.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: CreateProduct_esModule, $$typeof: CreateProduct_$$typeof } = CreateProduct_proxy;
const CreateProduct_default_ = CreateProduct_proxy.default;

const CreateProduct_e0 = CreateProduct_proxy["ProductContext"];

const e1 = CreateProduct_proxy["ProductContextProvider"];

// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs
var react_hot_toast_dist = __webpack_require__(86014);
;// CONCATENATED MODULE: ./Context/CartProvider.js

const CartProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\CartProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: CartProvider_esModule, $$typeof: CartProvider_$$typeof } = CartProvider_proxy;
const CartProvider_default_ = CartProvider_proxy.default;

const CartProvider_e0 = CartProvider_proxy["CartContext"];


/* harmony default export */ const CartProvider = (CartProvider_default_);
;// CONCATENATED MODULE: ./Context/AdminProvider.js

const AdminProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\AdminProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AdminProvider_esModule, $$typeof: AdminProvider_$$typeof } = AdminProvider_proxy;
const AdminProvider_default_ = AdminProvider_proxy.default;

const AdminProvider_e0 = AdminProvider_proxy["AdminContext"];


/* harmony default export */ const AdminProvider = (AdminProvider_default_);
;// CONCATENATED MODULE: ./Context/BillingProvider.js

const BillingProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\BillingProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: BillingProvider_esModule, $$typeof: BillingProvider_$$typeof } = BillingProvider_proxy;
const BillingProvider_default_ = BillingProvider_proxy.default;

const BillingProvider_e0 = BillingProvider_proxy["Billing"];


/* harmony default export */ const BillingProvider = (BillingProvider_default_);
;// CONCATENATED MODULE: ./Context/paymentProvider.js

const paymentProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\paymentProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: paymentProvider_esModule, $$typeof: paymentProvider_$$typeof } = paymentProvider_proxy;
const paymentProvider_default_ = paymentProvider_proxy.default;

const paymentProvider_e0 = paymentProvider_proxy["bank"];


/* harmony default export */ const paymentProvider = (paymentProvider_default_);
;// CONCATENATED MODULE: ./Context/InvoicesProvider.js

const InvoicesProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\InvoicesProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: InvoicesProvider_esModule, $$typeof: InvoicesProvider_$$typeof } = InvoicesProvider_proxy;
const InvoicesProvider_default_ = InvoicesProvider_proxy.default;

const InvoicesProvider_e0 = InvoicesProvider_proxy["Invoices"];


/* harmony default export */ const InvoicesProvider = (InvoicesProvider_default_);
;// CONCATENATED MODULE: ./Context/InstallmentProvider.js

const InstallmentProvider_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\Context\InstallmentProvider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: InstallmentProvider_esModule, $$typeof: InstallmentProvider_$$typeof } = InstallmentProvider_proxy;
const InstallmentProvider_default_ = InstallmentProvider_proxy.default;

const InstallmentProvider_e0 = InstallmentProvider_proxy["InstallmentContext"];

const InstallmentProvider_e1 = InstallmentProvider_proxy["InstallmentContextProvider"];

;// CONCATENATED MODULE: ./components/HomePage/coming_soon2/trackingId/TrackingID.js

const TrackingID_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\CC\Desktop\Ecommerce\frontend\components\HomePage\coming_soon2\trackingId\TrackingID.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: TrackingID_esModule, $$typeof: TrackingID_$$typeof } = TrackingID_proxy;
const TrackingID_default_ = TrackingID_proxy.default;


/* harmony default export */ const TrackingID = (TrackingID_default_);
;// CONCATENATED MODULE: ./app/layout.js
















const metadata = {
    title: "Store",
    description: "A store for all your needs"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_app_layout_js_import_Montserrat_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((dist_default()), {
                    color: "#000",
                    height: 4
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(InstallmentProvider_e1, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(InvoicesProvider, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(paymentProvider, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BillingProvider, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Context, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(AdminProvider, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CartProvider, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_hot_toast_dist/* Toaster */.x7, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(TrackingID, {}),
                                                    children
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;