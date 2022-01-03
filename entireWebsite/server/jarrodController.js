const jarrodSoloEntry = require(`./jarrodDb.json`)
let globalId = 3

   module.exports = {
    getJarrodSoloEntry: (req, res)=> { 
        for(i = 0; i < jarrodSoloEntry.length; i++){
             if(jarrodSoloEntry[i].id + "" === "3"){   //if this id is equal to the one that i am looking for, then we delete.
                console.log(jarrodSoloEntry[i])  
           res.status(200).send(jarrodSoloEntry[i])
        }
    }
    },

    createJarrodSoloEntry: (req, res) => {
            const{title, video} =req.body
            let newJarrodSolo = { title, video, id: globalId}
            jarrodSoloEntry.push(newJarrodSolo)
            res.status(200).send(jarrodSoloEntry)
            globalId++
        },

        deleteJarrodSoloEntry: (req, res) => {
            let index = req.params.id  //what i needed to delete was in the request
            console.log(req.params.id)
            for(i = 0; i < jarrodSoloEntry.length; i++){
               console.log(jarrodSoloEntry[i].id, index)
                if(jarrodSoloEntry[i].id + "" === index){   //if this id is equal to the one that i am looking for, then we delete.
                    jarrodSoloEntry.splice(i, 1)
                res.status(200).send(jarrodSoloEntry)
           }
            }
        }
    }



