import styles from "./ProjectsStyles.module.css";
import Netflix from "../../assets/netflixgpt.jpg";
import Award from "../../assets/Award.jpg";
import Firechat from "../../assets/chat-app.jpg";
import News from "../../assets/news.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Firechat}
          link="https://github.com/ashu4040/Chat-app/tree/main/chat_app"
          h3="FireChat"
          p="Chatting App"
        />
        <ProjectCard
          src={Netflix}
          link="https://github.com/ashu4040/NetflixGPT"
          h3="NetflixGPT"
          p=" Movies Recommendations"
        />
        <ProjectCard
          src={Award}
          link="https://github.com/ashu4040/Two-Good-Co-Clone"
          h3="Two Good Co"
          p="Awwwarded Website"
        />
        <ProjectCard
          src={News}
          link="https://github.com/ashu4040/News-Sabha"
          h3="NewsSabha"
          p="News Website"
        />
      </div>
    </section>
  );
}

export default Projects;
