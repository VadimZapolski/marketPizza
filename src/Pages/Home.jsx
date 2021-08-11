import React, {useCallback, useEffect} from 'react';
import Categories from "../Component/Categories";
import SortPopup from "../Component/SortPopup";
import PizzaBlock from "../Component/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../Redux/actions/actionsFilters";
import LoadingBlock from "../Component/PizzaBlock/LoadingBlock";
import {fetchPizzas} from "../Redux/actions/actionsPizzas";
import filtersReducer from "../Redux/reducer/filtersReducer";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
]


const Home = React.memo(function Home() {
        const dispatch = useDispatch()
        const items = useSelector(({pizzasReducer}) => pizzasReducer.items)
        const isLoaded = useSelector(({pizzasReducer}) => pizzasReducer.isLoaded)
        const {category, sortBy} = useSelector(({filters}) => filtersReducer)


        useEffect(() => {
            dispatch(fetchPizzas(sortBy, category))
        }, [category, sortBy])

        const onSelectedCategory = useCallback((index) => {
            dispatch(setCategory(index))
        }, [])


        const onSelectedSortType = useCallback((type) => {
            dispatch(setSortBy(type))
        }, [])

        return (
            <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={category}
                        onClickCategory={onSelectedCategory}
                        items={categoryNames}/>
                    <SortPopup
                        onClickSortType={onSelectedSortType}
                        activeSortType={sortBy}
                        items={sortItems}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    {isLoaded ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>)
                        : Array(12)
                            .fill(0)
                            .map((_, index) => <LoadingBlock key={index}/>)
                    }
                </div>
            </div>
        )
    }
)
export default Home