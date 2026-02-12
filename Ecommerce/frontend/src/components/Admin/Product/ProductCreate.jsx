import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import Sample from '../../common/Sample';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { adminToken, apiUrl } from '../../common/Http';
import { useNavigate } from 'react-router';
import axios from 'axios';

function ProductCreate({ placeholder }) {
    const editor = useRef(null);
    const [description, setDescription] = useState('');
    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();
    const [previewImages, setPreviewImages] = useState([]);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || ''
    }), [placeholder]);

    // Save product
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
            formData.append("sku", data.sku);
            formData.append("barcode", data.barcode || "");
            formData.append("qty", data.qty || 0);
            formData.append("status", data.status);
            formData.append("is_Featured", data.is_Featured);

            // Append gallery images if any
            const gallery = data.gallery || [];
            gallery.forEach(id => formData.append('gallery[]', id));

            const res = await fetch(`${apiUrl}/products`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${adminToken()}`
                },
                body: formData
            });

            const result = await res.json();

            if (res.ok) {
                toast.success("Product Created Successfully");
                navigate('/products');
            } else {
                toast.error(result.message || "Validation Error");
            }

        } catch (error) {
            console.log(error);
            if (error.response?.data?.errors) {
                const fromError = error.response.data.errors;
                Object.keys(fromError).forEach((field) => {
                    setError(field, { message: fromError[field][0] });
                    toast.error("Something Went Wrong!");
                });
            } else {
                toast.error("Something Went Wrong!");
            }
        }
    };

    // Fetch categories
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

    // Fetch brands
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

    // Upload multiple images
    const uploadTempImages = async (e) => {
        const newFiles = Array.from(e.target.files); // files just selected
        const previews = [...previewImages]; // existing previews
        const galleryIds = []; // for uploaded file IDs

        for (let i = 0; i < newFiles.length; i++) {
            previews.push(URL.createObjectURL(newFiles[i])); // add preview

            const formData = new FormData();
            formData.append('image', newFiles[i]);

            try {
                const res = await axios.post(`${apiUrl}/temp-image`, formData, {
                    headers: {
                        "Authorization": `Bearer ${adminToken()}`,
                        "Content-Type": "multipart/form-data"
                    }
                });
                galleryIds.push(res.data.id); // collect uploaded temp IDs
            } catch (err) {
                console.log('Upload failed for:', newFiles[i].name, err.response?.data);
            }
        }

        // Append new previews to old ones
        setPreviewImages(previews);

        // Append new gallery IDs to old ones
        setValue('gallery', [...(formValue.gallery || []), ...galleryIds]);
    };


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
                            <select {...register("category_id", { required: "Please select a category." })}
                                className="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option value="">Select a Category</option>
                                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                            {errors.category_id && <p className="text-red-500 text-sm">{errors.category_id.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Brand</label>
                            <select {...register("brand_id")}
                                className="block appearance-none w-full border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option value="">Select a Brand</option>
                                {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                            </select>
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

                    {/* Gallery */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Images
                            </label>

                            {/* Custom File Upload Box */}
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

                            {/* Preview Images */}
                            <div className="flex flex-wrap mt-4">
                                {previewImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="preview"
                                        className="w-20 h-20 mr-2 mb-2 object-cover rounded border border-gray-300"
                                    />
                                ))}
                            </div>

                        </div>
                    </div>


                    <button type="submit"
                        className='rounded-md bg-[#007595] py-2 px-6 mt-2 text-white hover:bg-[#005f66]'>
                        Submit
                    </button>
                </form>
            </Sample>
        </>
    );
}

export default ProductCreate;
