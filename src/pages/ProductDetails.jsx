import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ProductDetails() {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()
    async function getProduct() {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProduct(response.data)
    }

     useEffect(() => {
        getProduct()
    }, [])

    return (
        <div>
            <h1>Student Details</h1>
            {product ?
                <>
                    <p>name: {product.title}</p>
                   

                </>
                : null}
        </div>
    )
}

export default ProductDetails   