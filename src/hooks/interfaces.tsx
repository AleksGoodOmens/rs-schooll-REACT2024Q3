import { IPeopleItem } from '../interfaces/interfaces';

interface ILoading {
	isLoading: boolean;
	error?: string;
}

interface ITabs {
	data: string[];
}

interface IUseGEtData extends ILoading {
	data: string[] | IPeopleItem[];
	fetchData: () => object;
}

export type { ITabs, ILoading, IUseGEtData };
