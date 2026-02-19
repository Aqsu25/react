import React, { useEffect, useState } from 'react';
import Sample from '../../common/Sample';
import Loader from '../../common/Loader';
import Empty from '../../common/Empty';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { adminToken, apiUrl } from '../../common/Http';

function ProductShow() {
  const [products, setProducts] = useState([]);           // All products from backend
  const [loader, setLoader] = useState(false);            // Loader state
  const [selectedProducts, setSelectedProducts] = useState([]); // IDs of selected products

  // Fetch products from API
  const fetchProductApi = async () => {
    setLoader(true);
    try {
      const res = await fetch(`${apiUrl}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${adminToken()}`,
        },
      });
      const result = await res.json();
      if (result.status === 200) {
        setProducts(result.data);  // Store products in state
      } else {
        console.log('Something went wrong!');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  // Delete single product
  const deleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`${apiUrl}/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${adminToken()}`,
        },
      });
      const result = await res.json();
      if (result.status === 200) {
        toast.success(result.message);
        setProducts((prev) => prev.filter((p) => p.id !== id));      // Remove from products array
        setSelectedProducts((prev) => prev.filter((pid) => pid !== id)); // Remove from selected
      } else {
        toast.error('Failed to delete product');
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete selected products (bulk)
  const deleteSelected = async () => {
    if (selectedProducts.length === 0) return toast.info('No products selected!');
    if (!window.confirm(`Are you sure you want to delete ${selectedProducts.length} products?`)) return;

    for (const id of selectedProducts) {
      await deleteProduct(id);  // Reuse single delete function
    }
    setSelectedProducts([]); // Clear selection after deletion
  };

  // On component mount, fetch products
  useEffect(() => {
    fetchProductApi();
  }, []);

  return (
    <Sample title="Products" btnText="Create" to="/products/create">
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base">
        {loader && <Loader />}
        {!loader && products.length === 0 && <Empty text="Products are empty!" />}

        {products.length > 0 && (
          <>
            {/* Bulk delete button, shows only if some products are selected */}
            {selectedProducts.length > 0 && (
              <div className="mb-3">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={deleteSelected}
                >
                  Delete Selected ({selectedProducts.length})
                </button>
              </div>
            )}

            <table className="w-full text-sm text-left rtl:text-right text-body">
              <thead className="bg-neutral-secondary-soft border-b border-gray-300">
                <tr>
                  {/* Select All Checkbox */}
                  <th className="px-6 py-3 font-medium">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedProducts(products.map((p) => p.id)); // select all
                        } else {
                          setSelectedProducts([]); // deselect all
                        }
                      }}
                      checked={
                        selectedProducts.length === products.length && products.length > 0
                      }
                    />
                  </th>
                  <th className="px-6 py-3 font-medium">Id</th>
                  <th className="px-6 py-3 font-medium">Title</th>
                  <th className="px-6 py-3 font-medium">Price</th>
                  <th className="px-6 py-3 font-medium">SKU</th>
                  <th className="px-6 py-3 font-medium">Image</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-gray-300"
                  >
                    {/* Individual row checkbox */}
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedProducts((prev) => [...prev, product.id]); // add
                          } else {
                            setSelectedProducts((prev) =>
                              prev.filter((id) => id !== product.id) // remove
                            );
                          }
                        }}
                      />
                    </td>

                    <th className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                      {product.id}
                    </th>
                    <td className="px-6 py-4">{product.title}</td>
                    <td className="px-6 py-4">{product.price}</td>
                    <td className="px-6 py-4">{product.sku}</td>
                    <td className="px-6 py-4">
                      {product.image || (product.product_images && product.product_images.length > 0) ? (
                        <img
                          src={`http://backend.test/storage/product/${
                            product.image || product.product_images[0].name
                          }`}
                          width={50}
                          alt="img"
                        />
                      ) : (
                        <p>No Image Available</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {product.status === 1 ? (
                        <span className="text-white bg-green-700 hover:bg-green-300 font-medium rounded-full text-sm px-4 py-2 text-center">
                          Active
                        </span>
                      ) : (
                        <span className="text-white bg-red-500 hover:bg-red-300 font-medium rounded-full text-sm px-4 py-2 text-center">
                          Block
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-around">
                        <Link
                          to={`/products/${product.id}/edit`}
                          className="font-medium text-fg-product hover:underline text-blue-600"
                        >
                          <FontAwesomeIcon icon={faPencil} />
                        </Link>
                        <Link
                          onClick={() => deleteProduct(product.id)}
                          to="#"
                          className="font-medium text-fg-product hover:underline text-red-600"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </Sample>
  );
}

export default ProductShow;
