export default function App() {
  return (
    <main className="min-vh-100 bg-light d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5 text-center">
                <span className="badge text-bg-primary mb-3">
                  Bootstrap CDN loaded
                </span>
                <h1 className="display-5 fw-semibold mb-3">
                  Hello, Vite + React!
                </h1>
                <p className="lead text-body-secondary mb-4">
                  Tailwind is gone and Bootstrap styles are now coming from the
                  CDN.
                </p>
                <button className="btn btn-primary btn-lg">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
