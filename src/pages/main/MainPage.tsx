import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import Categories from '../../components/categories/Categories';
import Cards from '../../components/cards/Cards';

import { useAppSelector } from '../../store/hooks/hooks';

import styles from './styles.module.css';
import DetailedCard from '../../components/detailedCard/DetailedCard';
import Downloader from '../../components/downloader/Downloader';
const MainPage = () => {
	const { activeCategory } = useAppSelector((state) => state.category);
	const { activeCard, favoriteCards } = useAppSelector((state) => state.cards);

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section className={styles['container']}>
					<div className={styles['box']}>
						{!activeCategory && (
							<div className={styles['welcome']}>
								<div className={styles['welcome__body']}>
									<div className={styles['scroll']}>
										<div className={styles['scroll__content']}>
											<h1>
												Week 3 - React. Task #3 Redux. Redux Toolkit, RTK Query.
												Context api
											</h1>

											<h2>
												An Epic Saga of the Path to Mastery in Web Development
											</h2>
											<p>
												In a galaxy far, far away, amidst the boundless expanses
												of the web universe, where billions of lines of code
												recreate realities and fulfill dreams, began the story
												of a novice.
											</p>
											<p>
												In these grand times, when the Internet was still
												blossoming and the wonders of web development were not
												yet in sight, there existed a person whose eyes were
												filled with awe before the invisible world of code. This
												individual, relying on their intuitive powers, ventured
												along the uncharted paths of web design and programming.
												They were surrounded by an ocean of information, where
												at every corner mystical symbols and unfamiliar
												constructs flashed, creating a magical world of HTML,
												CSS, and JavaScript.
											</p>

											<p>
												At the start of their journey, there were only simple
												forms and headings. With each passing day, mastering the
												basics of HTML, they created pages that, though simple,
												possessed incredible power – the power to tell stories,
												convey emotions, and provide information.
											</p>

											<p>
												Just as an ancient blacksmith forges metal to create a
												magnificent sword, so too did our hero forge CSS,
												learning its properties and boundaries, transforming
												blank pages into visually captivating works of art. They
												studied every pixel, every color, and font, crafting
												harmony and beauty in every project.
											</p>

											<p>
												However, as with any great epic, a new challenge lay
												ahead. JavaScript, this powerful yet complex language,
												opened up new horizons and trials. Their code began to
												come alive, like magic, as they learned functions,
												loops, and events, and realized that programming was not
												merely a set of commands but a way to communicate with
												the very essence of technology.
											</p>

											<p>
												And so, when our hero reached the first heights, they
												felt a need for more. They sought a way to enhance their
												skills and deepen their knowledge. Thus, they discovered
												a mysterious and powerful place – the React Course from
												RS School. It was like stepping through a portal into a
												new world, where the greatest secrets of web development
												were unveiled.
											</p>

											<p>
												With React, they began to build interfaces that were not
												only beautiful but also dynamic, responsive, and alive.
												They learned to create components, manage state, and
												interact with data, like a mighty wizard mastering their
												powers. Every new task and project unveiled new
												horizons, bringing them closer to their dream of
												becoming a master frontend developer.
											</p>

											<p>
												Their path was long and arduous, but they did not stop.
												Through hardships to the stars, through lines of code
												and blocks of errors, they continued moving forward. And
												now, on the horizon, a new era dawns – an era where
												their dream becomes reality.
											</p>

											<p>
												Victory glimmers ahead, shining like stars in the night
												sky. They see their future, where they become not just a
												developer but a master of their craft, a person who
												creates not just websites but entire worlds in which
												every user lives and breathes.
											</p>

											<p>
												Thus concludes one chapter of their great journey. But
												this is only the beginning. In this endless cosmos of
												web development, new challenges and great achievements
												await. And they are ready for them. With new knowledge,
												new goals, and boundless passion, they are prepared to
												embark on further adventures, to continue shaping the
												future of the internet and realizing their dreams.
											</p>

											<p>
												And so the story continues, of how one person, having
												traveled from novice to master, found their place in
												this boundless world of code and web technologies.
											</p>

											<h2>
												To start your expedition please choose category below
											</h2>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<Categories />

					{activeCategory && <SearchBar />}
					<section
						className={`${styles['p-2']} ${activeCard ? styles['content'] : ''}`}
					>
						{activeCategory && <Cards />}
						{activeCard && <DetailedCard />}
					</section>
				</section>
			</main>
			{favoriteCards.length > 0 ? <Downloader /> : ''}
			<Footer />
		</div>
	);
};

export default MainPage;
