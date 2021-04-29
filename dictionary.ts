let m=function(D:any)
{
    let outD:any={'mon':0,'tue':0,'wed':0,'thur':0,'fri':0,'sat':0,'sun':0};
    let keys=Object.keys(D);
    
    keys.forEach(element => {
        // console.log(element);
        let date:Date=new Date(element);
        // console.log(date);
        // console.log(date.getDay())
        switch(date.getDay())
        {
            case 0:
                    
                    outD['sun']=outD['sun']+D[element]
                    // console.log(outD['sun'])
                    break
            case 1:
                    
                    outD['mon']=outD['mon']+D[element]
                    // console.log(outD['mon'])
                    break
            case 2:
                   
                    outD['tue']=outD['tue']+D[element]
                    // console.log(outD['tue'])
                    break
            case 3:
                   
                    outD['wed']=outD['wed']+D[element]
                    // console.log(outD['wed'])
                    break
            case 4:
                 
                    outD['thur']=outD['thur']+D[element]
                    // console.log(outD['thur'])
                    break
            case 5:
                    
                    outD['fri']=outD['fri']+D[element]
                    // console.log(outD['fri'])
                    break
            case 6:
                    
                    outD['sat']=outD['sat']+D[element]
                    // console.log(outD['sat'])
                    break
            
        }
        
    });

    Object.keys(outD).forEach(key => {
        let value = outD[key]
        if(value==0)
        {
            // console.log(value)

            
        }
      });

      return outD;
}



let D: Record<string, number>={ '2020-01-01':4,
                                '2020-01-02':4,
                                '2020-01-03':6,
                                '2020-01-04':8,
                                '2020-01-05':2,
                                '2020-01-06':-6,
                                '2020-01-07':2,
                                '2020-01-08':-2,};
// let D: Record<string, number>={ '2020-01-01':6,
                                
//                                 '2020-01-04':12,
//                                 '2020-01-05':14,
//                                 '2020-01-06':2,
//                                 '2020-01-07':4,
//                                 };
 let OutD=m(D)
console.log("output D",OutD)

