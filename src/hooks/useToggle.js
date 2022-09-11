import { useState } from 'react';

  /**
   * Custom hook to use Toggle between GRID and LIST view
   * Hooks used:
   *      -> useState
   * returns:
   *      -> isGridView: Boolean to show Grid View if true or else to show Listview
   *      -> toggleToListView: toogle handler to show list view
   *      -> toggleToGridView: toogle handler to show grid view
   */

const useToggle = () => {
    const [isGridView, setisGridView] = useState(true);

    const toggleToGridView = (e) => {
        setisGridView(true)

    }
    const toggleToListView = (e) => {
        setisGridView(false)

    }
    return {isGridView, toggleToListView, toggleToGridView};
}

export default useToggle;