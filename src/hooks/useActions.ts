import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import { AppDispatch } from '../store';
import { CalcActionCreators } from '../store/calculator/action-creators';

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>();
	return bindActionCreators(CalcActionCreators, dispatch);
}