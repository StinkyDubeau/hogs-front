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

*This is for my own memory*

1. Deploy hogs-front to amplify
2. Deploy hogs-api to EC2
3. Set hogs-front's environment variable to point to EC2's public IP:3001 *Ensure there is no "/" at the end of the line*
4. Change the security group settings on EC2 to allow connections from amplify*


*Strongly consider doing this differently. An API gateway is needed, but not free.