//We may not always want to log a value to the console.

/*We may want the function to return a value that is stored in 
memory and is callable any time we want.
*/

const shootCurvedBullets = function(shootRadius)
{
    return 3.14 * shootRadius**2;
 
}

const SniperMan = shootCurvedBullets(3);
console.log(SniperMan);