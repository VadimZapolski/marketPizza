import React, {useCallback} from 'react';
import Categories from "../Component/Categories";
import SortPopup from "../Component/SortPopup";
import PizzaBlock from "../Component/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../Redux/actions/actionsFilters";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
]

const Home = React.memo(function Home() {
        const dispatch = useDispatch()

        const items = useSelector(({pizzasReducer}) => pizzasReducer.items)

        const onSelectedCategory = useCallback((index) => {
            dispatch(setCategory(index))
        }, [])
    console.log('rerender')
        return (
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClickItem={onSelectedCategory}
                        items={categoryNames}/>
                    <SortPopup items={sortItems}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">

                    {items && items.map((obj) => (
                        <PizzaBlock key={obj.id}
                                    {...obj}/>
                    ))
                    }

                </div>
            </div>
        )
    }
)
export default Home