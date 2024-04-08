import { useAuth } from "@/context/AuthContext";
import { htmlContent } from "@/storage/getHtml";
import { callApi } from "@/util/api";
import { Chapter, Document } from "@/util/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DocumentDetails = () => {
  const router = useRouter();
  const { documentId, title } = router.query;
  const [documents, setDocuments] = useState<Document | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [chapter, setChapter] = useState<Chapter | undefined>();
  const [error, setError] = useState<string | null>(null);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const documents: Document = await callApi(
          "GET",
          `/api/documentById?documentId=${documentId}`
        );
        setDocuments(documents);
        if (title) {
          setChapter(
            documents.chapters.find(
              (obj) =>
                encodeURIComponent(obj.title) ===
                encodeURIComponent(title as string)
            ) as Chapter
          );
        } else {
          setChapter(documents.chapters[0]);
        }

        setLoading(false);
      } catch (error) {
        setError("Error fetching documents. Please try again later.");
        setLoading(false);
      }
    };
    documentId && fetchDataAsync();
  }, [documentId, title]);

  const openChapter = (chapter: Chapter) => {
    router.push(`/${documentId}/${encodeURIComponent(chapter.title)}`);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {documents && (isLoggedIn ? true : !documents.confidential) ? (
        <div className="m-2">
          <h4 className="d-flex">
            <p
              role="button"
              onClick={() => {
                router.back();
              }}
            >
              &larr;
            </p>
            {documents.title}
          </h4>
          <p className="border-bottom">{documents.description}</p>
          <div className="d-flex">
            <div className="border-end p-2">
              {documents.chapters.map((chapter) => {
                return (
                  <p
                    key={chapter.title}
                    role="button"
                    className="p-2 bg-black text-white rounded"
                    onClick={() => {
                      openChapter(chapter);
                    }}
                  >
                    {chapter.title}
                  </p>
                );
              })}
            </div>
            <div className="p-3 float-end w-50">
              {chapter && (
                <>
                  <h1 className="border-bottom pb-2">{chapter.title}</h1>
                  <div>{htmlContent(chapter.content)}</div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="m-2">You do not have access to view this page</div>
      )}
    </>
  );
};

export default DocumentDetails;
