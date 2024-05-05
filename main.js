function starClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ODfkjksvk/model.json' , modelReady )
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    if (error) 
    {
        console.error(error);
    }   else 
       {
            console.log(results);
            ramdom_number_r = Math.floor(Math.random() * 255) + 1;

            console.log(results);
            ramdom_number_g = Math.floor(Math.random() * 255) + 1;

            console.log(results);
            ramdom_number_b = Math.floor(Math.random() * 255) + 1;


            document.getElementById("result_label").innerHTML = 'escucho:  '+ results[0].label;

            document.getElementById("result_confidence").innerHTML = 'presicion:  '+ (results[0].confidence*100).toFixed(2)+" %";
            
            document.getElementById("result_label").style.color = "rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";

            document.getElementById("result_confidence").style.color = "rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";

            img = document.getElementById('Cat confused.jfif')

            img1 = document.getElementById('Doggy.jfif')

            img2 = document.getElementById('Leon gringo meme.jfif')

            img3 = document.getElementById('Televisa presenta pajaro.jfif')

            if (results[0].label == "maullidos") 
            {
                img.src = 'Cat Scream GIF-Cat Scream Cute Cat-Discover & Share GIFs.gif';

                img1.src = 'Doggy.jfif';

                img2.src = 'Leon gringo meme.jfif';

                img3.src = 'Televisa presenta pajaro.jfif';
            } else if (results[0].label =="Ladridos") 
            {
                img.src = 'Cat confused.jfif';

                img1.src = 'Perrito Sorprendido GIF-Perrito Sorprendido Shocked-Discover & Share GIFs.gif';

                img2.src = 'Leon gringo meme.jfif';

                img3.src = 'Televisa presenta pajaro.jfif';

            }  else if (results[0].label == "Rugido")
            {
                img.src = 'Cat confused.jfif';

                img1.src = 'Doggy.jfif';

                img2.src = 'Lion King What GIF-Find & Share on GIPHY.gif';
                
                img3.src = 'Televisa presenta pajaro.jfif';
            } else 
            {
                img.src = 'aliens-01.png';

                img1.src = 'aliens-02.png';

                img2.src = 'aliens-03.png';

                img3.src = 'Parrot Rock On GIF-Parrot Rock ON OK-Discover & Share GIFs.gif';
            }
        }
}