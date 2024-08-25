import Tag from "./Tag/Tag";
import "./TagList.css"

export default function TagList({ actualTags, actualId }) {
    console.log(actualId)
    return (
        <div className="category_container">
            {actualTags.map((tag, index) => <Tag key={index} actualTag={tag} />)}
        </div>
    )
}
