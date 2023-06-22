import { apiUrl, emailStatus } from "./store";

export async function validateEmail(email: any) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export async function downloadCertificate(email: string, eventId: string) {
  emailStatus.set({
    isError: false,
    isValid: false,
    isNotFound: false,
    isInvalidReq: false,
    isServerError: false,
    isValidating: false,
    isLoading: true,
  });

  const isValid = await validateEmail(email);

  if (!isValid) {
    emailStatus.set({
      isError: true,
      isValid: false,
      isNotFound: false,
      isInvalidReq: false,
      isServerError: false,
      isValidating: false,
      isLoading: false,
    });

    return;
  }

  emailStatus.update((status) => ({ ...status, isValid: true }));

  const query = `correo=${email.toLowerCase()}`;

  const url = `${apiUrl}/pdf/${eventId}?${query}`;

  try {
    const response = await fetch(url);

    if (response.status == 404) {
      emailStatus.update((status) => ({
        ...status,
        isError: true,
        isNotFound: true,
      }));

      return;
    }

    if (response.status == 400) {
      emailStatus.update((status) => ({
        ...status,
        isError: true,
        isInvalidReq: true,
      }));

      return;
    }

    if (response.status == 500) {
      emailStatus.update((status) => ({
        ...status,
        isError: true,
        isServerError: true,
      }));

      return;
    }

    const blob = await response.blob();
    const file = window.URL.createObjectURL(blob);

    window.location.assign(file);

    emailStatus.update((status) => ({ ...status, notFound: true }));
  } catch (err) {
  } finally {
    emailStatus.update((status) => ({
      ...status,
      isLoading: false,
      isValidating: false,
    }));

    emailStatus.subscribe((status) => console.log(status));
  }
}
