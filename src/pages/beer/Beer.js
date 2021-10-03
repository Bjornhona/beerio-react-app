import React, {useEffect, useState} from 'react';
import { withAuth } from '../../lib/authContext';
import { useRouteMatch, Redirect } from 'react-router-dom';
import './Beer.css';
import { beerService } from '../../lib/beer-service';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';
import Heart from '../../components/heart/Heart';
import headerImage from './beer-428121_1920.jpg';
import HeaderSection from '../../components/header-section/HeaderSection';
import BackButton from '../../components/back-button/BackButton';

const Beer = () => {
  let match = useRouteMatch();
  const {id} = match.params;
  
  const [beerData, setBeerData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {labels, name, style, abv, isOrganic} = beerData;
  const newStyle = style && style.category.name;
  const newIcon = labels && labels.icon;
  const newIsOrganic = isOrganic === 'Y' ? "Yes" : "No";

  useEffect(() => {
    let ignore = false;

    const getBeer = () => beerService.getBeer(id)
    .then(data => {
      if (!ignore) {
        setBeerData(data);
        setIsLoading(false);  
      }
    })
    .catch(error => {
      console.error(error.response);
      if (error.response.status === 404 || error.response.status === 500) {
        setRedirect(true);
        setIsLoading(false);
      }
    });
    getBeer();

    return () => {ignore = true}
  }, [id]);

  return (
    <>
      <HeaderSection 
        headline="Explore the world of beers"
        breadText="Start the adventure of searching, saving and learning about more than 3000 beers."
        image={headerImage}/>

      {isLoading ? <LoadingScreen /> :
      redirect ? <Redirect to='/notfound'/> :
      <>
        <div className="beer-section outer-content">
          <div className="beer-content">
            <div className="left-beer-content">
              <div className="headline-row">
                <h2>{name}.</h2>
                <Heart
                  id={id}
                  name={name}
                  isOrganic={newIsOrganic}
                  icon={newIcon}
                  style={newStyle}
                />
              </div>
              <h4>{style && style.name}</h4>
              <h6>{newStyle}</h6>
              <p>{style && style.year}</p>
              <p>{style && style.description}</p>
            </div>

            {labels &&
              <div className="right-beer-content">
                <div><img className="big-label-img" src={labels.large} alt="big beer label"/></div>
              </div>}
          </div>
        </div>
        <div className="bottom-beer-content beer-section outer-content">
          <div className="beer-info">
            <div><strong>Abv: </strong>{abv}%</div>
            <div><strong>Ibu: </strong>{style && style.ibuMax}</div>
            <div><strong>Organic Beer:</strong> {newIsOrganic}</div>
          </div>
        </div>
        <BackButton />
      </>}
    </>
  )
}

export default withAuth(Beer);