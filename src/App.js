
import './App.css';
import Entry from './Entry'

function App() {

  const files = {
    //level/depth:0
    children:[
      {
        name:"folder-1",
        //level/depth:1
        children:[
          {
            name:"file-1 of folder-1",
            children:[
              {
                name:"sub file of file-1 of folder-1"
              }
            ]
          },
          {
            name:"file-2 of folder-1"
          }
        ]
      },
      {
        name:"folder-2"
      },
      
        {
          name:"folder-3",
          children:[
            {
              name:"file-1 of folder-3"
            },
            {
              name:"file-2 of folder-3"
            },
            {
              name:"file-3 of folder-3"
            }
          ]
        },
        {
          name:"folder-4"
        }
      
    ]

  }

  return (
    <div className="App">
      {
        files.children.map((child,index)=><Entry key={index} child={child} depth={1}/>)
      }
         </div>
  );
}

export default App;
