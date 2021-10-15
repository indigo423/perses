// Copyright 2021 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Alert } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

/**
 * Fallback for ErrorBoundary that shows an MUI Alert with the `Error.message`
 * as its contents.
 */
function AlertErrorFallback(props: FallbackProps) {
  const { error } = props;
  return <Alert severity="error">{error.message}</Alert>;
}

export default AlertErrorFallback;
