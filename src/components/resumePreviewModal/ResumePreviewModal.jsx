import { X, Download } from "lucide-react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ResumePDF from "../resumePdf/ResumePDF";

function ResumePreviewModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
          <h3 className="text-white font-semibold text-lg">Resume Preview</h3>
          <div className="flex items-center gap-3">
            
            <PDFDownloadLink
              document={<ResumePDF />}
              fileName="Githiyon_M_Resume.pdf"
            >
              {({ loading }) => (
                <button className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Download className="size-4" />
                  {loading ? "Preparing..." : "Download PDF"}
                </button>
              )}
            </PDFDownloadLink>

            
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-600 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        
        <div className="w-full h-[75vh]">
          <PDFViewer width="100%" height="100%" showToolbar={false}>
            <ResumePDF />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}

export default ResumePreviewModal;