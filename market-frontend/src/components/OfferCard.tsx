import Image from "next/image";
import React from "react";
import { Offer } from "../types";
import { TooltipSection } from "./TooltipSection";

type CardProps = { data: Offer; onClick: any };
export function OfferCard({ data: offer, onClick }: CardProps) {
  return (
    <div className="card card-compact bg-slate-50 shadow-xl">
      <Image
        className="bg-neutral-200"
        src={offer.token.uri}
        height={500}
        width={500}
        objectFit="contain"
        alt="picture"
      />
      <div className="card-body bg-base-100">
        <h2 className="card-title">{offer.token.name}</h2>
        <TooltipSection text={offer.token.description} />
        <div
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "inline",
            maxWidth: "10rem",
          }}
        >
          {"creator: " + offer.token.creator}
        </div>
        <div
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "inline",
            maxWidth: "10rem",
          }}
        >
          {"seller: " + offer.seller}
        </div>
        <div className="justify-start text-pink-400 font-bold">
          {offer.price} APT
        </div>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={onClick}
            style={{ minWidth: "6rem" }}
          >
            {"Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
