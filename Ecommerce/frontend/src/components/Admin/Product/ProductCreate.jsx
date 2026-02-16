import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import Sample from '../../common/Sample';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { adminToken, apiUrl } from '../../common/Http';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // Specific icon import



function ProductCreate({ placeholder }) {
    const editor = useRef(null);
    const [description, setDescription] = useState('');
    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();
    const [previewImages, setPreviewImages] = useState([]);
    const [gallery, setGalleryIds] = useState([]);


    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || ''
    }), [placeholder]);

    // saveproduct
    const saveProduct = async (data) => {
        try {
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("category_id", data.category_id);
            formData.append("brand_id", data.brand_id);
            formData.append("short_description", data.short_description || "");
            formData.append("description", description || "");
            formData.append("price", data.price);
            formData.append("compare_price", data.compare_price || "");
            formData.append("sku", data.sku || "");
            formData.append("barcode", data.barcode || "");
            formData.append("qty", data.qty || 0);
            formData.append("status", data.status);
            formData.append("is_Featured", data.is_Featured || 0);

            if (Array.isArray(gallery) && gallery.length > 0) {
                gallery.forEach((id, index) => {
                    formData.append(`gallery[${index}]`, id);
                });
            }

            const res = await fetch(`${apiUrl}/products`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${adminToken()}`,
                    "Accept": "application/json"
                },
                body: formData
            });

            const text = await res.text();
            let result;

            try {
                result = JSON.parse(text);
            } catch (err) {
                console.error("Server returned non-JSON response:", text);
                toast.error("Server Error (500)");
                return;
            }

            if (res.ok) {
                toast.success("Product Created Successfully");
                navigate("/products");
            }

            else if (res.status === 422 && result.errors) {
                Object.values(result.errors).forEach(errorArray => {
                    errorArray.forEach(message => {
                        toast.error(message);
                        console.log(message);
                    });
                });
            }

            else {
                toast.error(result.message || "Something went wrong");
                console.log(result.message);

            }

        } catch (error) {
            console.error("Unexpected Error:", error);
            toast.error("Unexpected Server Error");
        }
    };
    // fetchcategory
    const fetchCategory = async () => {
        try {
            const res = await fetch(`${apiUrl}/admin/categories`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    "Authorization": `Bearer ${adminToken()}`
                },
            });
            const result = await res.json();
            if (result.status === 200) setCategories(result.data);
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Something Went Wrong!");
        }
    };

    // fetchbrand
    const fetchBrand = async () => {
        try {
            const res = await fetch(`${apiUrl}/admin/brands`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    "Authorization": `Bearer ${adminToken()}`
                },
            });
            const result = await res.json();
            if (result.status === 200) setBrands(result.data);
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Something Went Wrong!");
        }
    };

    // image
    const uploadTempImages = async (e) => {
        const files = Array.from(e.target.files);
        const previews = [...previewImages];

        const formData = new FormData();
        files.forEach(file => {
            previews.push(URL.createObjectURL(file));
            formData.append('image[]', file);
        });

        try {
            const res = await axios.post(`${apiUrl}/temp-image`, formData, {
                headers: {
                    "Authorization": `Bearer ${adminToken()}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            const newIds = res.data.ids;

            setGalleryIds(prev => {
                const updated = [...prev, ...newIds];
                setValue('gallery', updated);
                return updated;
            });

            setPreviewImages(previews);

        } catch (err) {
            console.log('Upload failed', err.response?.data);
            toast.error("Image upload failed!");
        }
    };
    // deleteImage
    const deleteImage = (image) => {
        const newSetGallery = setGalleryIds(prev => prev.filter(gallery => gallery != image));
        setGalleryIds(newSetGallery);
    }

    useEffect(() => {
        fetchCategory();
        fetchBrand();
    }, []);

    return (
        <>
            <Sample title='Product/Create' btnText='Back' to='/products'>
                <form onSubmit={handleSubmit(saveProduct)}>
                    {/* Title */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Title</label>
                            <input
                                {...register("title", { required: "The title field is required." })}
                                className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                placeholder="Product Title"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>
                    </div>

                    {/* Category & Brand */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Category</label>

                            <div className='relative'>
                                <select {...register("category_id", { required: "Please select a category." })}
                                    className="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="">Select a Category</option>
                                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            {errors.category_id && <p className="text-red-500 text-sm">{errors.category_id.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Brand</label>
                            <div className='relative'>
                                <select {...register("brand_id")}
                                    className="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="">Select a Brand</option>
                                    {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Short Description */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Short Description</label>
                            <textarea {...register("short_description")} rows="4"
                                className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                            </textarea>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Description</label>
                            <JoditEditor
                                ref={editor}
                                value={description}
                                config={config}
                                tabIndex={1}
                                onBlur={newContent => setDescription(newContent)}
                            />
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Price</label>
                            <input {...register("price", { required: "The price field is required." })}
                                className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Discounted Price</label>
                            <input {...register("compare_price")}
                                className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />
                        </div>
                    </div>

                    {/*qty and sku*/}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Qty</label>
                            <input {...register("qty", { required: "The qty field is required." })}
                                className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />
                            {errors.qty && <p className="text-red-500 text-sm">{errors.qty.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Sku</label>
                            <input {...register("sku", { required: "The sku code is required." })}
                                className="appearance-none block w-full text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />
                            {errors.sku && <p className="text-red-500 text-sm">{errors.sku.message}</p>}
                        </div>
                    </div>
                    {/* status */}
                    <div className="flex flex-wrap -mx-3 mb-6">

                        <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Status</label>
                            <div className="relative">
                                <select
                                    {...register("status", { required: "Please select a status." })}
                                    className="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                >
                                    <option value="">Select a Status</option>
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
                        </div>
                    </div>
                    {/* featured */}
                    <div className="flex flex-wrap -mx-3 mb-6">

                        <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Featured</label>
                            <div className="relative">
                                <select
                                    {...register("is_Featured", { required: "Please select a status." })}
                                    className="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                >
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            {errors.is_Featured && <p className="text-red-500 text-sm mt-1">{errors.is_Featured.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Images
                            </label>

                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">

                                <span className="text-gray-600 text-sm font-medium">
                                    Choose Files
                                </span>

                                <span className="text-gray-500 text-xs mt-1">
                                    or drag and drop images here
                                </span>

                                <input
                                    type="file"
                                    multiple
                                    onChange={uploadTempImages}
                                    className="hidden"
                                />
                            </label>

                            <div className="flex flex-wrap mt-4">
                                {previewImages.map((img, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={img}
                                            alt="preview"
                                            className="w-20 h-20 mr-2 mb-2 object-cover rounded border border-gray-300"
                                        />
                                        <button
                                            type="button"
                                            className='absolute top-1 right-1 z-50'
                                            onClick={() => deleteImage(img)}
                                        >
                                            <FontAwesomeIcon size="lg" icon={faCircleXmark} className='text-red-500' />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <button type="submit"
                            className='rounded-md bg-[#007595] py-2 px-6 mt-2 text-white hover:bg-[#005f66]'>
                            Submit
                        </button>
                    </div>
                </form >
            </Sample >
        </>
    );
}

export default ProductCreate;
