import { useEffect, useState } from "react";
import { callApi } from "@/util/api";
import Link from "next/link";
import { Document } from "@/util/types";
import { useAuth } from "@/context/AuthContext";

const DocumentsPage = () => {
  const [documents, setDocuments] = useState<
    Record<string, Document> | undefined
  >();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isLoggedIn} = useAuth();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const documents = await callApi("GET", "/api/documents");
        setDocuments(documents);
        setLoading(false);
      } catch (error) {
        setError("Error fetching documents. Please try again later.");
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <>
      <div className="m-2">
        <h2>Documents</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <>
          {documents &&
            Object.keys(documents).map((key: string) => {
              const doc: Document = documents[key];
              return (
                (isLoggedIn ? true : !doc.confidential) && (
                  <div
                    className="border-bottom m-2 d-flex justify-content-between align-items-center"
                    key={key}
                  >
                    <div>
                      <h6>{doc.title}</h6>
                      <p>{doc.description}</p>
                    </div>
                    <div>
                      <Link href={key} className="bg-black text-white p-2 rounded text-decoration-none">View Document</Link>
                    </div>
                  </div>
                )
              );
            })}
        </>
      </div>
    </>
  );
};

export default DocumentsPage;
