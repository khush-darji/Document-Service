# A Fake Document Service - mini-project

## Folder Structure

    .
    ├── components                     # Reusable UI components
    │     ├── button           
    │     ├── header
    ├── context              
    │     ├── AuthContext              # AutheWrapper
    ├── pages              
    │     ├── index                    # Document page ("/")
    │     ├── [documentId]             
    │     │       ├── index            # Dynamic page for document view
    │     │       ├── [title]          
    │     │       │     ├── index      # Dynamic page for document view with specific title
    ├── api                            
    │     ├── documentById             # Get document by id from storage/document.json file
    │     ├── documents                # Get all documents from storage/document.json file
    │     ├── login                    # User login with fixed username and password(username:khushdarji,password: password)
    ├── login                          # User login with fixed username and password(username:khushdarji,password: password)
    ├── storage                        
    │     ├── documents.json           # Static data of documents
    │     ├── getHtml.tsx              # Get html content based on html names
    ├── styles                        
    │     ├── global.css               # Global styles
    ├── utils                        
    │     ├── api                      # Used for api calls(Axios)
    │     ├── types                    # Defined common types
    └── README.md

## Getting Started

Install Node modules
```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Live Vercel url
https://document-service-rho.vercel.app/