import "./BlogGrid.css"
import { blogData } from "../../BlogData"

export default function BlogGrid() {
    return (
        <>
            <div className="blog-grid">
                {
                    blogData.map((value, index) => {
                        return (
                            <div className="item-grid" key={index}>
                                <img src={value.img} alt="" />
                                <span>{value.category}</span>
                                <h4>{value.title}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}