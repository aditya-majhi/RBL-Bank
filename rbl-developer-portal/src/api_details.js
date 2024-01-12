import { RedocStandalone } from 'redoc';

export default function APIDetails(props) {

  return (

  <>
  {console.log('inside API Details')}
  
  <title>RBL API Specifications</title>
  {/* needed for adaptive design */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./custom-styles.css" />
  <div id="redoc-container">
  <RedocStandalone specUrl="http://localhost:3000/apis/swagger.json"

    options={{
      nativeScrollbars: true,
      disableSearch: true,
      theme: { 
        colors: { primary: { main: '#dd5522' } },
        rightPanel:
        {
        backgroundColor: '#0B57D0',
        width: '40%',
        textColor: '#ffffff'
        },  
      }
    }}  

  />
   </div>
</>

  );
};