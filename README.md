# hogs-front

Frontend for hogs website.

## Developing:

-   npm
-   prettier

Using:

-   Vite
-   React
-   Tailwind

More to come.

## Branches

-   main
    Development branch
-   production
    Deployed to AWS


## Deployment

*This is for my own use*

1. Deploy hogs-api to EC2 (as many instances as you need)
3. Deploy a load balancer to point to the instances you just created
4. Define a security group for hogs-api to only accept traffic from the load balancer you just created.
6. Deploy hogs-front to amplify
7. Define hogs-front environment variable `VITE_API_URL=https://[dns-of-load-balancer-you-just-created]:3001` *<- No "/"*
8. *(:*

TODO:
- Containerize hogs-api instances. At the moment, each instance has to be manually created by installing git and node. This will suck when scaling.
    - At minimum, run the server using pm2 to ensure everything runs incase of a reboot
- We will have to create a separate balancer for incoming connection from game clients. Or enable the API key authentication. Or both
