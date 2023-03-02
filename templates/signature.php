<?php
/*
Template Name: Email Signature
Template Post Type: signatures
*/
?>
<html>
<body>

<?php
$book = carbon_get_the_post_meta('sig_book');
while (have_posts()) {
  the_post();?>

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 0; padding: 0; width: 100%; height: 100%;" bgcolor="#ffffff">
	<tr>
		<td style="margin: 0; padding: 0; width: 100%; height: 100%;" align="left" valign="top">
			<table border="0" cellspacing="0" cellpadding="0">
				<!-- Main -->
				<tr>
					<td class="pb-20" style="padding-bottom: 20px;">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td valign="top">
									<table width="100%" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td class="img pb-20" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 40px;">
												<a href="https://anchovies.agency/" target="_blank"><img src="<?php echo get_theme_file_uri('/dist/images/logo_2x.png') ?>" width="212" height="28" border="0" alt="" /></a>
											</td>
										</tr>
										
										<tr>
											<td class="pb-14" style="padding-bottom: 5px;">
												<table border="0" cellspacing="0" cellpadding="0">
													<tr>
														<td valign="top">
															<table width="200px" border="0" cellspacing="0" cellpadding="0">

																<tr>
																	<td class="text-13" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:auto !important;">
																		<strong><?php the_title(); ?></strong>
																	</td>
																</tr>
                                                                <tr>
																	<td class="text-13" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:auto !important;">
																		<p style="margin:0;"><?php echo carbon_get_the_post_meta('sig_position') ?></p>
																	</td>
																</tr>
															</table>
														</td>
														<!--<td width="23">
															<table width="100%" border="0" cellspacing="0" cellpadding="0">
																<tr>
																	<td class="py-1 px-11" style="font-size: 0pt; line-height: 0pt; padding-top: 1px; padding-bottom: 1px; padding-left: 11px; padding-right: 11px;">&nbsp;</td>
																</tr>
															</table>
														</td>-->
														<td width="10" style="font-size: 0pt; line-height: 0pt;">&nbsp;</td>
														<!--<td width="60">
															<table width="100%" border="0" cellspacing="0" cellpadding="0">
																<tr>
																	<td class="py-1 px-11" style="font-size: 0pt; line-height: 0pt; padding-top: 1px; padding-bottom: 1px; padding-left: 11px; padding-right: 11px;">&nbsp;</td>
																</tr>
															</table>
														</td>-->
														<td valign="top">
															<table width="100%" border="0" cellspacing="0" cellpadding="0">
																<tr>
																	<td class="text-13" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:auto !important;">
																		<a href="<?php echo carbon_get_the_post_meta('sig_email'); ?>" target="_blank" class="link" style="color:#393939; text-decoration:none;"><?php echo carbon_get_the_post_meta('sig_email'); ?></a>
																	</td>
																</tr>
                                                                <tr>
																	<td class="text-13 pb-10" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:auto !important;">
																		<p style="margin:0;"><?php echo carbon_get_the_post_meta('sig_phone'); ?></p>
																	</td>
																</tr>
                                                                <tr>
																	<td class="text-13 pb-10" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:auto !important;">
																		<p style="margin:0;"><?php echo carbon_get_the_post_meta('sig_address1'); ?></p>
																	</td>
																</tr>
                                                                <tr>
																	<td class="text-13 pb-10" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:auto !important;">
																		<p style="margin:0;"><?php echo carbon_get_the_post_meta('sig_address2'); ?></p>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
                    
				</tr>
				<!-- END Main -->
				<?php if ( ! empty( $book ) ) : ?>
                <tr>
                    <td width="100%" height="1px" bgcolor="#393939"></td>
                </tr>

				<!-- Social Bar -->
				<tr>
					<td class="py-15 px-20" align="left" style="padding-top:15px;">
						<!-- Socials -->
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td class="text-13 pb-10" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:200px !important; padding-bottom: 5px;">
                                    <strong>LET'S CHAT.</strong>
                                </td>
                                <td width="10"></td>
                                <td class="text-13 pb-10" style="font-size:14px; line-height:17px; color:#393939; font-family:Courier, sans-serif; text-align:left; min-width:auto !important; padding-bottom: 5px;">
                                    <a href="https://anchovies.agency/contact/" target="_blank" class="link" style="color:#393939;">BOOK A MEETING</a>
                                </td>
							</tr>
						</table>
						<!-- END Socials -->
					</td>
				</tr>
				<!-- END Green Bar -->
				<?php endif; ?>
			</table>
		</td>
	</tr>
</table>
<?php } ?>
</body>
</html>
