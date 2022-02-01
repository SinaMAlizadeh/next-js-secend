import artileStyle from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <div className={artileStyle.grid}>
      {articles?.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
}

export default ArticleList;
