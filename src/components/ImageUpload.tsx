import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card, CardTitle } from "@/components/ui/card";
import { SVGProps } from "react";

interface IProps {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  file: File | null;
  fun: string;
}

export function ImageUpload({ handleFileChange, loading, file, fun }: IProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-md mx-auto">
        
        <CardContent className="p-6">
          <div className="grid w-full max-w-sm items-center gap-4">
          <CardTitle className="text-gray-800 mb-4">See the funny side of an Image!</CardTitle>
            <Label className="text-center" htmlFor="picture-upload">
              Upload your image
            </Label>
            <Input
              className="w-full bg-gray-200 p-2 rounded cursor-pointer border border-gray-300"
              id="picture-upload"
              type="file"
              onChange={handleFileChange}
            />
            <div className="flex justify-center items-center">
              <img
                alt="Uploaded I mage"
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden"
                height="200"
                src={file ? URL.createObjectURL(file) : "/placeholder.svg"}
                width="200"
              />
            </div>

            {loading === true ? (
              <div>
                <div className="flex justify-center items-center">
                  <Button size="icon" variant="outline">
                    <LoaderIcon className="h-4 w-4 animate-spin" />
                    <span className="sr-only">Loading</span>
                  </Button>
                </div>
                <p className="text-center text-sm text-gray-500">
                  Your image is being processed...
                </p>
              </div>
            ) : (
              <p className="text-center text-sm text-gray-700">
                {fun ? fun : "Safety Issue!"}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function LoaderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="12" x2="12" y1="18" y2="22" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
      <line x1="2" x2="6" y1="12" y2="12" />
      <line x1="18" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
    </svg>
  );
}

function PlaceholderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1200"
      height="1200"
      fill="none"
    >
      <rect width="1200" height="1200" fill="#EAEAEA" rx="3" />
      <g opacity=".5">
        <g opacity=".5">
          <path
            fill="#FAFAFA"
            d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"
          />
          <path
            stroke="#C9C9C9"
            stroke-width="2.418"
            d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"
          />
        </g>
        <path
          stroke="url(#a)"
          stroke-width="2.418"
          d="M0-1.209h553.581"
          transform="scale(1 -1) rotate(45 1163.11 91.165)"
        />
        <path
          stroke="url(#b)"
          stroke-width="2.418"
          d="M404.846 598.671h391.726"
        />
        <path
          stroke="url(#c)"
          stroke-width="2.418"
          d="M599.5 795.742V404.017"
        />
        <path
          stroke="url(#d)"
          stroke-width="2.418"
          d="m795.717 796.597-391.441-391.44"
        />
        <path
          fill="#fff"
          d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"
        />
        <g clip-path="url(#e)">
          <path
            fill="#666"
            fill-rule="evenodd"
            d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z"
            clip-rule="evenodd"
          />
        </g>
        <path
          stroke="#C9C9C9"
          stroke-width="2.418"
          d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="554.061"
          x2="-.48"
          y1=".083"
          y2=".087"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C9C9C9" stop-opacity="0" />
          <stop offset=".208" stop-color="#C9C9C9" />
          <stop offset=".792" stop-color="#C9C9C9" />
          <stop offset="1" stop-color="#C9C9C9" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="796.912"
          x2="404.507"
          y1="599.963"
          y2="599.965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C9C9C9" stop-opacity="0" />
          <stop offset=".208" stop-color="#C9C9C9" />
          <stop offset=".792" stop-color="#C9C9C9" />
          <stop offset="1" stop-color="#C9C9C9" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="600.792"
          x2="600.794"
          y1="403.677"
          y2="796.082"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C9C9C9" stop-opacity="0" />
          <stop offset=".208" stop-color="#C9C9C9" />
          <stop offset=".792" stop-color="#C9C9C9" />
          <stop offset="1" stop-color="#C9C9C9" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="404.85"
          x2="796.972"
          y1="403.903"
          y2="796.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C9C9C9" stop-opacity="0" />
          <stop offset=".208" stop-color="#C9C9C9" />
          <stop offset=".792" stop-color="#C9C9C9" />
          <stop offset="1" stop-color="#C9C9C9" stop-opacity="0" />
        </linearGradient>
        <clipPath id="e">
          <path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z" />
        </clipPath>
      </defs>
    </svg>
  );
}
