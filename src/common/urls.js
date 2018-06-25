const urlBase = '/api/v1/';

export const URLS = {
  test: (activeProject, id) => `${urlBase}${activeProject}/test/${id}`,
};
