type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const GTM_ID = "GTM-XXXXXXX" // Replace with your actual GTM container ID

export function pushEvent({
  event,
  ...rest
}: {
  event: string
  [key: string]: any
}) {
  if (typeof window === "undefined") {
    return
  }

  if (!window.dataLayer) {
    window.dataLayer = []
  }

  window.dataLayer.push({
    event,
    ...rest,
  })
}

export function trackFormSubmission(formData: { name: string; email: string; occupation: string }) {
  pushEvent({
    event: "form_submission",
    formType: "early_access",
    userType: formData.occupation,
    formData: {
      // Only include non-PII data or hashed values for compliance
      userType: formData.occupation,
      // You can add more non-PII metrics here
    },
  })
}

export function trackFormView() {
  pushEvent({
    event: "form_view",
    formType: "early_access",
  })
}

export function trackFormSuccess() {
  pushEvent({
    event: "form_success",
    formType: "early_access",
  })
}

export function trackFormError(errorMessage: string) {
  pushEvent({
    event: "form_error",
    formType: "early_access",
    errorMessage,
  })
}
