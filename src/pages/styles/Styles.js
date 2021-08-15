import React, {useState, useEffect} from 'react';
import './styles.css';
import { beerService } from '../../lib/beer-service';
import HeaderSection from '../../components/header-section/HeaderSection';
import headerImage from './beers-1283566_1920.jpg';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';

const Styles = () => {
  const [allStyles, setAllStyles] = useState([]);
  const [styles, setStyles] = useState([]);
  const [allStylesInCategory, setAllStylesInCategory] = useState();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isStyled, setIsStyled] = useState(false);
  const [isCategorized, setIsCategorized] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getCategories = () => beerService.getCategories()
    .then(response => {if (!ignore) {
      setCategories(response);
    }})
    .catch(error => console.error(error));

    const getStyles = () => beerService.getStyles()
      .then(response => {if (!ignore) {
        setStyles(response);
        setAllStyles(response);
        setIsStyled(false);
        setIsCategorized(false);
      }})
      .catch(error => console.error(error));
    
      Promise.all([getCategories(), getStyles()])
      .then(() => setIsLoading(false))

    return () => {ignore = true};
  }, []);

  const handleSelectCategories = (event) => {
    const id = event.target.value;
    const filteredStyles = allStyles.filter(style => style.categoryId == id);
    
    setIsCategorized(true);
    setIsStyled(false);
    setCategory(categories.filter(category => category.id == id));
    setAllStylesInCategory(filteredStyles);
    setStyles(filteredStyles);
  }

  const handleSelectStyles = (event) => {
    const id = event.target.value;
    const filteredStyles = allStyles.filter(style => style.id == id);

    setIsStyled(true);
    setStyles(filteredStyles);
  }

  return (
    <div className="styles-screen">
      <HeaderSection 
        headline="Sense your inner beer style"
        breadText="Read about different beer styles organized by category."
        image={headerImage}/>
      <div className="styles-div outer-content">

        <div className="beers-div-header">
          <h2>Find your beer style.</h2>
        </div>

        {isLoading ? <LoadingScreen/> :
          <>
            <div className="styles-searchboxes">
              <div className="styles-search">
                <select name="category" 
                        defaultValue="Select category..." 
                        id="category" 
                        className="styles-search" 
                        autoComplete="off" 
                        onChange={handleSelectCategories}>
                  <option value="Select category..." disabled>Select category...</option>
                  {categories && categories.map(category => 
                    <option value={category.id} key={category.id}>{category.name}</option>)}
                </select>
              </div>

              {isCategorized && allStylesInCategory.length > 0 &&
                <div className="styles-search">
                  <select name="style" 
                          defaultValue="Select style..." 
                          id="style" 
                          className="styles-search" 
                          autoComplete="off" 
                          onChange={handleSelectStyles}>
                    <option value="Select style..." disabled>Select style...</option>
                    {allStylesInCategory.map(style => 
                      <option value={style.id} key={style.id}>{style.name}</option>)}
                  </select>
                </div>}
            </div>

            {isStyled && styles.length > 0 && styles.map(style => 
                <div className="styles-item-container" key={style.id}>
                  <h4>{style.name}</h4>
                  <h6>{category && category[0].name}</h6>
                  <p>{style.description}</p>
                  {style.abvMin && style.abvMax && <h6>Alcohol: {style.abvMin}-{style.abvMax}%</h6>}
                </div>
              )}
          </>}

      </div>
    </div>
  );
};

export default Styles;