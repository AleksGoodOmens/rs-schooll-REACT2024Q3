/* import { Cards } from '../../components';
import { fetchCards } from './actions';

export default function CategoryPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [cards, setCards] = useState<IDetailedCard[]>([]);
	const [count, setCount] = useState(cards.length);
	const [error, setError] = useState(false);
	const searchParams = useSearchParams();

	const search = searchParams.get('search');

	const { category, page } = useParams<{
		category: string;
		page: string;
		search: string;
	}>();

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			const cardsData = await fetchCards({
				category: category,
				page: page,
				search: search || '',
			});

			if (!cardsData) {
				setError(true);
			} else if (cardsData) {
				const cards = cardsConverter(cardsData.results);
				setCards(cards);
				setCount(cardsData.count);
				setError(false);
			}
			setIsLoading(false);
		};
		getData();
	}, [category, page, search]);

	// todo pagination query page, category

	return (
		<>
			<SearchBar />
			<Pagination
				count={count}
				page={page || '1'}
				category={category}
				search={search || ''}
			/>
			<section className={styles['items']}>
				{isLoading && <Loader />}
				{error && <Banner>Something go wrong</Banner>}

				{cards.length ? (
					<Cards cards={cards} />
				) : (
					<Banner>No items founded</Banner>
				)}
			</section>
		</>
	);
}
{
	/* {favoriteCards.length ? <Downloader /> : ''} */
